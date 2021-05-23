export default (context: any) => {
  const { redirect, store } = context
  if (!store.state.app.authenticated) {
    return redirect('/login')
  }
}