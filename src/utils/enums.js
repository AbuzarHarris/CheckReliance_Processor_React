export const ROUTE_URLS = {
  HOME_PAGE_ROUTE_URL: "/home",
  CHECK_TRANSACTION_ROUTE_URL: "/checktransaction",
}

export const FORM_TITLES = {
  HOME_PAGE_TITLE: "Home",
  CHECK_TRANSACTION_TITLE: "Pending Transaction",
}

export const routesWithFormTitles = {}
for (const key in ROUTE_URLS) {
  const routeUrl = ROUTE_URLS[key]
  const formTitleKey = key.replace("ROUTE_URL", "TITLE")
  const formTitle = FORM_TITLES[formTitleKey]
  routesWithFormTitles[routeUrl] = formTitle
}
