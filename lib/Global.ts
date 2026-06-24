//To provide test Data & objects/ Elements related to whole application
import{Page} from '@playwright/test';
export class global{

    constructor(public page : Page){
        this.page = page ;
    }
    //*********Tets Data */
    public url : string        = "https://ctcorphyd.com/SureshIT/login.php";
    public username: string    = "sureshit";
    public password: string    = "sureshit";
    public firstname: string   ='Suresh';
    public lastname: string    ='Ameerpet';
    public middlename: string  ='abc';
    public nickname: string    ='pappu'

    //******************* Object/Elemets */

    public textbox_loginname : string ="//input[@name='txtUserName']";
    public textbox_password : string ="//input[@name='txtPassword']";
    public button_login : string ="//input[@value='Login']";
    //public link_logout : string ="//a[text()='Logout']";
    public link_logout : string ='Logout';
    public frame_empInfo: string ="//iframe[@id='rightMenu']";
    public add_button: string="//input[@value='Add']";
    public textfield_lastname: string ="#txtEmpLastName";
    public textfield_Firstname: string="//input[@name='txtEmpFirstName']";
    public textfiled_Middlename:string="#txtEmpMiddleName"
    public textfield_Nickname: string= "#txtEmpNickName";
    public button_Save :string= ".savebutton"

   //public button_add: string =


}