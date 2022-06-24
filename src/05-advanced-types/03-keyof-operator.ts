(() => {
  type APIResponse = {
    user: {
      userId: string
      friendList: {
        count: number
        friends: {
          firstName: string
          lastName: string
        }[]
      }
    }
  }

  type ResponseKeys = keyof APIResponse // 'user'
  type UserKeys = keyof APIResponse['user'] // 'userId' | 'friendList'
  type FriendListKeys =
    keyof APIResponse['user']['friendList'] // 'count' | 'friends'

  function get<
    O extends object,
    K extends keyof O
  >(
    o: O,
    k: K
  ): O[K] {
    return o[k]
  }
})();
