const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  
  <div class="container" >
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <style>
        body {
                font-family: 'Lato', sans-serif;
                font-weight: 400;
                font-size: 16px;
                line-height: 1.7;
                color: #eee;
        }

        .header {
                height: 50vh;
                background-image: 
                linear-gradient(to right bottom, rgba(199, 227, 255, 0.8), rgba(30, 108, 217, 0.7)), url(/media/agr.png);
                background-size: cover;
                background-position: top;
                position: relative;
                clip-path: polygon(0 0, 100% 0, 100% 50vh, 0 100%);
        }

        .brand-box {
                position: absolute;
                top: 40px;
                left: 40px;
        }

        .brand { font-size: 20px; }

        .text-box {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                text-align: center;
        }

        .heading-primary {
                color: #fff;
                text-transform: uppercase;

                backface-visibility: hidden;
                margin-bottom: 30px;
        }

        .heading-primary-main {
                display: block;
                font-size: 45px;
                font-weight: 400;
                letter-spacing: 5px;
        }

        .heading-primary-sub {
                display: block;
                font-size: 18px;
                font-weight: 700;
                letter-spacing: 7.4px;
        }

        .btn:link,
        .btn:visited {
                text-transform: uppercase;
                text-decoration: none;
                padding: 10px 20px;
                display: inline-block;
                border-radius: 100px;
                transition: all .2s;
                position: relative;
        }

        .btn:hover {
                transform: translateY(-3px);
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .btn:active {
                transform: translateY(-1px);
                box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        }

        .btn-white-normal{
                font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                background-color: #fff;
                color: #777;
                font-size: 17px;
                height:100%;
                width:100%;
                display:flex;
                border-radius: 8px;
                align-items: center;
        }

        .btn-white {
                background-color: #fff;
                color: #777;
                font-size: 14px;
        }

        .btn-white-small {
                background-color: #fff;
                color: #777;
                font-size: 11px;
        }

        .tab {
                overflow: hidden;
                border: 1px solid #ccc;
                border-radius: 7px;
                background-color:  #4275d5b3;
        }

        /* Style the buttons that are used to open the tab content */
        .tab button {
                float: left;
                border: none;
                outline: none;
                cursor: pointer;
                padding: 14px 16px;
                transition: 0.5s;
                font-size: 18px;
                color: whitesmoke;
                font-weight: 600;
                background-color: transparent;
        }

        /* Change background color of buttons on hover */
        .tab button:hover {
                background-color: #4275d5e8;
        }

        /* Create an active/current tablink class */
        .tab button.active {
                background-color:  #4275d5e8;
        }

        /* Style the tab content */
        .tabcontent {
                display: none;
                padding: 6px 12px;
                border: 1px solid #ccc;
                border-top: none;
                color:blue;
        }

        .tabText{
                color:#4275d5c6;
                font-size: 17px;
        }

        .centeredDiv{
                display:flex;
                align-items: center;
                justify-content: center;

        }

        .centeredImg{
                width:60%;
        }
        </style>
    
        <div>
            <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <img width="250" height="125" src="/media/headerPhoto.png" >
            </a>
        </div>
        <div>
            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><a href="/index.html" class="headClick nav-link px-2 link-secondary">Home</a></li>
                <li><a href="/html/about.html" class="headClick nav-link px-2 link-dark">About</a></li>
                <li><a href="/html/software.html" class="headClick nav-link px-2 link-dark">Software</a></li>
                <li><a href="/html/tutorials.html" class="headClick nav-link px-2 link-dark">Tutorials</a></li>
                <li><a href="https://scholar.google.com/citations?hl=en&user=46HLWf8AAAAJ&view_op=list_works&sortby=pubdate" class="headClick nav-link px-2 link-dark">Publications</a></li>
                <li><a href="/html/people.html" class="headClick nav-link px-2 link-dark">People</a></li>
                
                <li><a href="/html/FAQ.html" class="headClick nav-link px-2 link-dark">FAQs</a></li>
            </ul>
        </div>
        
        <div class="col-md-3 text-end">
        </div>
        
    </header>
 </div>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('phylogenomics-header', Header);