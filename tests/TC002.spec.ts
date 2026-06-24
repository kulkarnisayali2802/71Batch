import{test} from '@playwright/test';

import { general } from '../lib/General';

test('TC002' , async ({page})=>{
    const obj=new general(page);

    await obj.openApplication();
    await obj.waitStatement();
    await obj.login();
    await obj.waitStatement();
    await obj.addEmployee();
    await obj.waitStatement();
    await obj.logout();


} )