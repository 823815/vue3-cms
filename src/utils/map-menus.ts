import type { RouteRecordRaw } from 'vue-router'
import { IBreadCrumb } from '@/base-ui/breadCrumb'

export function mapMenusToRoutes(userMenus: any): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  // 1.先去加载默认所有的routes
  const allRouters: RouteRecordRaw[] = []
  const allRoutersFile = require.context('../router/main', true, /\.ts/) //webpack提供的方法
  allRoutersFile.keys().forEach((routerFile) => {
    // console.log(routerFile)
    const route = require('../router/main' + routerFile.split('.')[1])
    allRouters.push(route.default)
  })
  // 2.根据菜单获取需要添加的routes
  // userMenus:
  // type === 1 -> children -> type === 1
  // type === 2 -> url -> route
  const _recurseGetRoute = (menus: any) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRouters.find((route) => route.path === menu.url)

        if (route) routes.push(route)
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)

  return routes
}

export function pathMapBreadcrumbs(userMenus: any[], path: string) {
  const breadCrumb: IBreadCrumb[] = []
  pathMapToMenu(userMenus, path, breadCrumb)
  return breadCrumb
}

export function pathMapToMenu(
  userMenus: any[],
  path: string,
  breadCrumb?: IBreadCrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], path)
      if (findMenu) {
        breadCrumb?.push({ name: menu.name })
        breadCrumb?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === path) {
      return menu
    }
  }
}
