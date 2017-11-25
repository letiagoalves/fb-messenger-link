const isString = (value) => typeof value === 'string';

/**
 * @description
 * Creates a Facebook Messenger protocol share link
 *
 * @param {String} appId Facebook application ID
 * @param {String} link Link to be shared
 * @return {String} Facebook Messenger protocol share link
 */
function createLink(appId, link) {
    if (!isString(link)) {
        throw new Error('link must be a {String}');
    }

    const encodedLink = encodeURIComponent(link);
    const encodedAppId = encodeURIComponent(appId);

    return `fb-messenger://share?link=${encodedLink}&app_id=${encodedAppId}`;
}

/**
 * @description
 * Create a factory function for a given application ID
 *
 * @param {String} appId Facebook application ID
 * @return {Function} Factory function that creates links
 */
function createLinkFactory(appId) {
    if (!isString(appId)) {
        throw new Error('appId must be a {String}');
    }

    return createLink.bind(createLink, appId);
}

module.exports = createLinkFactory;
