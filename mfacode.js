var speakeasy = require('./speakeasy')

module.exports.templateTags = [{
    name: 'mfacode',
    displayName: 'MFA Code',
    description: 'Get MFA Code',
    args: [
        {
            help: 'add secret ',
            displayName: 'secretCode',
            description: 'Secret Code',
            type: 'string',
            defaultValue: ""
        }
    ],
    async run (context, secretCode) {
        mfaCode = speakeasy.totp( { secret: secretCode, encoding: 'base32' } );
        return mfaCode;
    }
}];
