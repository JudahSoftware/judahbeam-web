// The Judah Beam website, www.judahbeam.com. It puts the visitor's device first, as in
// the approved mockup design/website-mockup.html: a Windows PC gets Download for Windows,
// a Mac Download for Mac, an Android phone Google Play, an iPhone or iPad "Coming soon"
// and Use it in Safari for now, anything else Use it in the browser. Every link in
// index.html already works without this file. Device detection and the installer lookup are copied from
// site/get.js (the Get page), not shared with it; this copy also tells a Mac apart.
// The Mac download is a fixed link (its own release, tag "mac"); RELEASES_API below only
// ever sees the Windows installers, because the Mac release is never the latest one.
(function () {
  "use strict";
  var RELEASES_API = "https://api.github.com/repos/JudahSoftware/JudahBeam-releases/releases/latest";

  // Which device opened the page: "android", "ios", "windows", "mac" or "other".
  // iPadOS asks for the desktop site and says "Macintosh", so a Mac with a touch screen is an iPad.
  function deviceKind(ua, touchPoints) {
    ua = String(ua || "");
    if (/Android/i.test(ua)) return "android";
    if (/iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && touchPoints > 1)) return "ios";
    if (/Windows NT/.test(ua) && !/Windows Phone/i.test(ua)) return "windows";
    if (/Macintosh|Mac OS X/.test(ua)) return "mac";
    return "other";
  }
  function isIPad(ua, touchPoints) { return /iPad/.test(ua) || (/Macintosh/.test(ua) && touchPoints > 1); }
  function isPhone(kind, ua) { return kind === "android" || kind === "ios" || /Mobi/i.test(String(ua || "")); }

  // The newest installer from a GitHub "latest release" answer, or null.
  function installerUrl(release) {
    var assets = (release && release.assets) || [];
    for (var i = 0; i < assets.length; i++) {
      if (/^JudahBeam-Setup.*\.exe$/i.test(assets[i].name || "") && assets[i].browser_download_url) return assets[i].browser_download_url;
    }
    return null;
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = { deviceKind: deviceKind, isIPad: isIPad, isPhone: isPhone, installerUrl: installerUrl };
  }
  if (typeof document === "undefined") return;

  var ua = navigator.userAgent, touch = navigator.maxTouchPoints || 0;
  var kind = deviceKind(ua, touch);
  var phone = isPhone(kind, ua);
  function $(id) { return document.getElementById(id); }

  // ---------------------------------------------------------------- the hero buttons
  var ctas = document.querySelector(".hero .ctas");
  var win = $("cta-win"), mac = $("cta-mac"), play = $("cta-play"), apple = $("cta-apple"), web = $("cta-web");
  var note = ctas.querySelector(".dlnote");
  function style(el, look) { el.className = "btn " + look; }
  function show(order) {   // [element, look] pairs, in order; the rest are hidden
    [win, mac, play, apple, web].forEach(function (el) { el.hidden = true; });
    order.forEach(function (pair) { style(pair[0], pair[1]); pair[0].hidden = false; ctas.insertBefore(pair[0], note); });
  }
  if (kind === "android") {
    show([[play, "white"]]);
  } else if (kind === "ios") {
    web.querySelector(".label").textContent = "Use it in Safari for now";
    show([[apple, "off"], [web, "white"]]);
  } else if (kind === "mac") {
    show([[mac, "white"], [web, "ghost"]]);
  } else if (kind === "other") {
    show([[apple, "off"], [web, "white"], [win, "ghost"]]);
  }   // windows: as written in index.html
  if (phone) $("hero-fine").querySelector(".more").hidden = true;

  // ---------------------------------------------------------------- the Get the app cards
  var cardFor = { windows: "get-win", android: "get-android", ios: "get-apple", mac: "get-mac", other: "get-web" };
  var tagFor = {
    windows: "For this PC", android: "For this phone", ios: isIPad(ua, touch) ? "For this iPad" : "For this iPhone",
    mac: "For this Mac", other: "For this computer"
  };
  var here = $(cardFor[kind]);
  here.classList.add("here");
  here.querySelector(".tag").textContent = tagFor[kind];
  $("gets").insertBefore(here, $("gets").firstChild);
  if (phone) {   // an installer for Windows or a Mac is no use on a phone
    var card = $("get-win");
    card.querySelector(".say").textContent = "Open this page on your PC to download.";
    card.querySelector(".acts").hidden = true;
    var macCard = $("get-mac");
    macCard.querySelector(".say").textContent = "Open this page on your Mac to download.";
    macCard.querySelector(".acts").hidden = true;
    macCard.querySelector(".macnote").hidden = true;
  }

  // ---------------------------------------------------------------- Download for Windows
  // After the click, say what to do when Windows warns about the installer.
  document.addEventListener("click", function (e) {
    var link = e.target.closest && e.target.closest("[data-installer]");
    if (!link) return;
    var wrap = link.closest("[data-dlwrap]");
    var line = wrap && wrap.querySelector(".dlnote");
    if (line) line.hidden = false;
  });

  // Point every Download at the newest installer. If the lookup fails, they keep the releases page.
  var downloads = document.querySelectorAll("[data-installer]");
  if (downloads.length && window.fetch) {
    fetch(RELEASES_API, { headers: { Accept: "application/vnd.github+json" } })
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (release) {
        var url = installerUrl(release); if (!url) return;
        for (var i = 0; i < downloads.length; i++) downloads[i].href = url;
      })
      .catch(function () { /* keep the releases page */ });
  }
})();
