function navbar(){
    return `<div id="navi">
        <div id="navlogo">
            <div class="btn">
                <span class="fas fa-bars"></span>
             </div>
            <a class="navlabels" id="imglogo" href="#"><img  width="46%" 
                src="https://www.zoomcar.com/blog/wp-content/uploads/2020/03/footer-logo.png"/></a>
           
        </div>
    
        <div id="navlabel"> 
            <label><a class="navlabels" href="./becomeHost.html">Become a Host</a></label>
            
             <label><a class="navlabels" href="./Arundhathi_Menon/ZMS.html">ZMS</a></label>
    
             <label id="signup"><a  id="profile_name" class="navlabels" href="./Arundhathi_Menon/LOGIN.html">Signup/Login</a></label>
    
             </div>
      
     </div>
       
    </div>
      <nav class="sidebar">
       
         <ul>
            <div id="lookside" class="gap1">
                <label class="sidemenu1">
                    <a class="arun" href="/Arundhathi_Menon/LOGIN.html">
                        <span class="iconz"><i class="fas fa-user-alt"></i></span>
                        <span class="item" id="side_login">Login or Signup</span>
                    </a>
                </label>
                <br>
             </div>
          
             <div class="gap1">
                <label class="sidemenu1">
                    <a class="arun" href="#">
                        <span class="iconz"><i class="fas fa-map-marker-alt"></i></span>
                        <span class="item">Change City</span>
                    </a>
                </label>
                <br>
              </div>

            <div class="gap1">
                <label class="sidemenu1">
                    <a class="arun" href="#">
                        <span class="iconz"><i class="fab fa-joomla"></i></span>
                        <span id="supermiler" class="item">Supermiler Club</span>
                    </a>
                </label>
                <br>
            </div>
    
           
            <div class="gap1">
                <label class="sidemenu1">
                    <a class="arun" href="#">
                        <span class="iconz"><i class="fas fa-clone"></i></i></span>
                        <span class="item">Zoomcar Fleet Vehicles Policies</span>
                    </a>
                </label>
                <br>
            </div>
         
            <div class="gap1">
                <label class="sidemenu1">
                    <a class="arun" href="#">
                        <span class="iconz"><i class="fas fa-clone"></i></span>
                        <span class="item">Zoomcar Host Vehicles Policies</span>
                    </a>
                </label>
                <br>
            </div>
           
            <div class="gap1">
                <label class="sidemenu1">
                    <a class="arun" href="#">
                        <span class="iconz"><i class="fas fa-phone-alt"></i></span>
                        <span class="item">Help & Support</span>
                    </a>
                </label>
            </div>

            <div class="gap1">
                <label class="sidemenu1">
                    <a class="arun" href="#">
                        <span class="iconz" id="logouticon"></span>
                        <span  class="item" id="logout"></span>
                    </a>
                </label>
            </div>
    
        </ul> 
    </nav>`
}
export default navbar