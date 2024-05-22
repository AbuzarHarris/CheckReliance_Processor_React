export const ROUTE_URLS = {
  HOME_PAGE_ROUTE_URL: "/home",
  CHECK_TRANSACTION_ROUTE_URL: "/pendingtransactions",
  LOGIN_PAGE_ROUTE_URL: "/auth",
}

export const FORM_TITLES = {
  HOME_PAGE_TITLE: "Home",
  CHECK_TRANSACTION_TITLE: "Pending Transaction",
  LOGIN_PAGE_TITLE: "Login",
}

export const routesWithFormTitles = {}
for (const key in ROUTE_URLS) {
  const routeUrl = ROUTE_URLS[key]
  const formTitleKey = key.replace("ROUTE_URL", "TITLE")
  const formTitle = FORM_TITLES[formTitleKey]
  routesWithFormTitles[routeUrl] = formTitle
}

export const QUERY_KEY = {
  PENDING_TRANSACTION_LIST: "Pending_Transaction_List",
}
