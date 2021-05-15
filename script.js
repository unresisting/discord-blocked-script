let blockedUser = ["blockedStringOrUsernameEtc", "andy"];
setInterval(() => {
    for (i = 0; i < document.getElementsByTagName("span").length; i++) {
        let e = document.getElementsByTagName("span")[i]; - 1 != blockedUser.indexOf(e.textContent.toLowerCase()) && null == e.parentNode.parentNode.parentNode.parentNode.getAttribute("data-list-id") && e.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode.parentNode.parentNode)
    }
}, 1e3);
