﻿/* SmtpJS.com */
Email = {
    send: function (t, e, o, n, d, r, c) {
        var a = Math.floor(1e6 * Math.random() + 1), m = "http://smtpjs.com/smtp.aspx?";
        m += "From=" + t, m += "&to=" + e, m += "&Subject=" + encodeURIComponent(o), m += "&Body=" + encodeURIComponent(n), void 0 == d.token ? (m += "&Host=" + d, m += "&Username=" + r, m += "&Password=" + c, m += "&Action=Send") : (m += "&SecureToken=" + d.token, m += "&Action=SendFromStored"), m += "&cachebuster=" + a, Email.addScript(m)
    }, addScript: function (t) {
        var e = document.createElement("link");
        e.setAttribute("rel", "stylesheet"), e.setAttribute("type", "text/xml"), e.setAttribute("href", t), document.body.appendChild(e)
    }
};