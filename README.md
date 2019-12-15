# insomnia-plugin-gmfacode
the code inlcudes insomnia plugin for generating google mfa code.



The following doc is to introduce some Insomnia advanced features to help on running API testing more efficiently :
 -e.g. input MFA code and get user token automatically


Problem to solve

During API testing, user needs to query and copy/paste the new token many times by calling "POST {base_url}/authenticate" with input of email/password and new MFA code (changed every 30s), which is quite annoying and time consuming.



Solution
With using some advanced feature of Insomnia, we can solve the problem by getting the updated MFA code automatically and have the new token from authentication API silently.

<Plugins>
Insomnia Plugin is a NodeJS module which can help on certain things like custom authentication mechanisms or complex workflows, and more details can be found https://support.insomnia.rest/article/26-plugins .

For automatically getting MFA code purpose, I developed one plugin(insomnia-plugin-gmfacode)with using  NodeJS Speakeasy package.

usage:

1. unzip upper file and copy the folder into Insomnia plugins folder (on my pc, it locates C:\Users\YongQ\AppData\Roaming\Insomnia\plugins)
2. Click Insomnia→ Tools → "Reload Plugins"
3. From Insomnia → Application → Preferences → Plugins, can see the new plugin imported
4. To get the mfa code, the secret code needs to be as input
5. Put email , password, mfa secret into the Environment variables
6. Call the authenticate API with Environment variables and Get MFA Code function from the plugin
7. So far, the token can be generated in response body each time after calling the POST /authenticate API,  with no need to update MFA code manually. 




<Chaining Requests>
Insomnia provides the ability to extract values from the responses of other requests. This is commonly referred to as chaining because the dependency upon another request forms a link.

We can use the ability to get the Bearer Token automatically for testing any ICS APIs with calling "POST /authenticate" API before as  a chaining request, and get the token from the response.

Usage:
1. e.g. call API "GET /sites"
2. configure Bearer Token of the API , from a chaining request
Trigger Behavior : select "Always - resend request when needed" to make sure the token gets refreshed every time.
3. then the API "GET /sites" can be called directly with using the updated user token silently from chaining request in the background

More articles of insomnia can be found : https://support.insomnia.rest/.

