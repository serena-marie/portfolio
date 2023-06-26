const name = 'Serena Gutierrez'

/**
 * Updates the page title. If pageTitle is passed in, it will display `portfolio owner name - pageTitle`
 * Otherwise the page title will just be the portfolio owner name.
 * @param {string} pageTitle - string to be appended to page title
 */
export function updatePageTitle (pageTitle = '') {
  const newPageTitle = pageTitle ? `${name} - ${pageTitle}` : `${name}`
  document.title = newPageTitle

  // Google Analytics 4, tracking page title on view
  window.gtag('event', 'page_view', { page_title: newPageTitle })
}
