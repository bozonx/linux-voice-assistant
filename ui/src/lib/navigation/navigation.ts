import router from '../../router'

export interface NavigationApi {
  push: (path: string) => Promise<void>
  currentPath: () => string
}

export const appNavigation: NavigationApi = {
  async push(path: string) {
    await router.push(path)
  },
  currentPath() {
    return router.currentRoute.value.path
  },
}
