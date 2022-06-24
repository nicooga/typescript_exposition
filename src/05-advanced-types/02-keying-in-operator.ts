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

  function renderFriendList(friendList: ?) {

  }
})();

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

  function renderFriendList(friendList: APIResponse["user"]["friendList"]) {

  }
})();
