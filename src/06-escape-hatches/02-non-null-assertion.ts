(() => {
  type Dialog = {
    id?: string
  }

  function closeDialog(dialog: Dialog) {
    if (!dialog.id) {
      return
    }
    setTimeout(() =>
      removeFromDOM(
        dialog,
        document.getElementById(dialog.id) // Error TS2345: Argument of type
        // 'string | undefined' is not assignable
        // to parameter of type 'string'.
      )
    )
  }
  function removeFromDOM(dialog: Dialog, element: Element) {
    element.parentNode.removeChild(element) // Error TS2531: Object is possibly
    //'null'.
    delete dialog.id
  }
})();

(() => {
  type VisibleDialog = { id: string }
  type DestroyedDialog = {}
  type Dialog = VisibleDialog | DestroyedDialog

  function closeDialog(dialog: Dialog) {
    if (!('id' in dialog)) {
      return
    }
    setTimeout(() =>
      removeFromDOM(
        dialog,
        document.getElementById(dialog.id)!
      )
    )
  }
  function removeFromDOM(dialog: VisibleDialog, element: Element) {
    element.parentNode!.removeChild(element)
    delete dialog.id
  }
})();
