import { defineAuth } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
    phone: true,
  },
  
  multifactor: {
    mode: 'OPTIONAL',
    totp: true
  },    
  userAttributes: {
    // specify a "birthdate" attribute
    birthdate: {
      mutable: true,
      required: false,
    },
    preferredUsername: {
      mutable: true,
      required: false
    }
  },
    
  groups: ["ADMINS", "EDITORS"],
    
});
