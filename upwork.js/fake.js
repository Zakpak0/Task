    static async LinkedinLogin() {
    const redirectUri = AuthSession.makeRedirectUri({ useProxy: true })
    console.log(redirectUri)
    const request = await AuthSession.loadAsync({
        clientId: "8630o4qzgkfvrs",
        clientSecret: "RF3he9v0wwGTMoKU",
        redirectUri: redirectUri,
        scopes: ["r_liteprofile"],
        responseType: "code",
    }, { authorizationEndpoint: "https://www.linkedin.com/oauth/v2/authorization" }).then((request) => {
        request.promptAsync({ authorizationEndpoint: "https://www.linkedin.com/oauth/v2/authorization" }, { useProxy: true }).then(({ type, ...response }) => {
            if (type == "success") {
                const { params: { code } } = response
                AuthSession.exchangeCodeAsync({
                    clientId: "8630o4qzgkfvrs",
                    clientSecret: "RF3he9v0wwGTMoKU",
                    redirectUri: redirectUri,
                    scopes: ["r_liteprofile"],
                    code
                }, { tokenEndpoint: "https://www.linkedin.com/oauth/v2/accessToken" }).then(async ({ accessToken, idToken }) => {
                    console.log(accessToken)

                    await fetch('https://api.linkedin.com/v2/me', {

                        headers: {
                            Authorization: `Bearer ${accessToken}`
                        }
                    }).then((result) => {
                        return result.json().then(async (user) => {
                            const credential = OAuthProvider.credentialFromResult(response)
                            console.log(credential)
                            // await signInWithCredential(authentication, {idToken, providerId: "linkedin.com" }).then(async ({ user }) => {
                            //     const currentUser = await get(userRef(user.uid))
                            //         .then(({ exists, val }) => {
                            //             console.log(exists(), val())
                            //             if (exists()) {
                            //                 return val()
                            //             }
                            //         })
                            //         .catch(error => {
                            //             const { displayName, email, photoURL, uid } = user
                            //             Users.create(user.uid, {
                            //                 uid
                            //             }).then((user) => {
                            //                 Utilities.Navigation.navigate("Home")
                            //             })
                            //                 .catch((error) => console.log(error))
                            //         })
                            //     return currentUser
                            // })
                        })
                    }).catch((eror) => console.log(eror))
                })
            }
        })
    })

    // const result = await request.promptAsync(discovery)
    // const url = await request.makeAuthUrlAsync(discovery)
    // // const parsed = request.parseReturnUrl(url)
    // console.log(result, url, "hello")
}
    static async AppleLogin() {
    const provider = new OAuthProvider('apple.com')
    provider.addScope('email')
    provider.addScope('name')
    console.log(provider)
    signInWithPopup(authentication, provider,).then((result) => {
        console.log(result)
    })
}