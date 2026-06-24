import{test} from '@playwright/test';
import { general } from '../lib/General';


test('TC01_LoginLogout', async({page})=>{
 const obj=new general(page);

 await obj.openApplication();
 await obj.waitStatement();
 await obj.login();
 await obj.waitStatement();
 await obj.logout();
}
)