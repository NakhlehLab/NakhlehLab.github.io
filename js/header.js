const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  
<div class="container" >
    <link rel="canonical" href="https://getbootstrap.com/docs/5.1/examples/headers/">
    <link rel="canonical" href="https://getbootstrap.com/docs/5.1/examples/footers/">
    <link rel="canonical" href="https://getbootstrap.com/docs/5.1/examples/jumbotron/">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="/css/headers.css" rel="stylesheet">
    <link href="/css/footers.css" rel="stylesheet">
    <style>
      .docs-dropdown {
        position: relative;
      }
      .docs-dropdown-menu {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        min-width: 180px;
        background: #fff;
        border: 1px solid rgba(0,0,0,.12);
        border-radius: .35rem;
        box-shadow: 0 4px 12px rgba(0,0,0,.12);
        z-index: 1000;
        padding: .35rem 0;
        margin-top: .15rem;
      }
      .docs-dropdown:hover .docs-dropdown-menu {
        display: block;
      }
      .docs-dropdown-menu a {
        display: block;
        padding: .4rem 1rem;
        color: #333;
        text-decoration: none;
        font-size: .9rem;
        white-space: nowrap;
      }
      .docs-dropdown-menu a:hover {
        background: #f0f4fb;
        color: #4275d5;
      }
      .docs-dropdown-menu a .badge-latest {
        display: inline-block;
        background: #28a745;
        color: #fff;
        font-size: .65rem;
        padding: .1rem .4rem;
        border-radius: 2rem;
        margin-left: .4rem;
        vertical-align: middle;
      }
      .docs-dropdown > a .caret {
        font-size: .55rem;
        margin-left: .2rem;
        vertical-align: middle;
      }
    </style>
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        
    
        <div>
            <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <img width="250" height="125" src="/media/headerPhoto.png" >
            </a>
        </div>
        <div>
            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><a href="/index.html" class="headClick nav-link px-2 link-secondary">Home</a></li>
                <li><a href="/html/about.html" class="headClick nav-link px-2 link-dark">About</a></li>
                <li class="docs-dropdown">
                    <a href="/v0.3.0/index.html" class="headClick nav-link px-2 link-dark">Documentation <span class="caret">&#9660;</span></a>
                    <div class="docs-dropdown-menu">
                        <a href="/v0.3.0/index.html">v0.3.0 <span class="badge-latest">latest</span></a>
                        <a href="/html/phynetpy-docs/index.html">v0.2.0</a>
                    </div>
                </li>
                <li><a href="/html/release-notes-v030.html" class="headClick nav-link px-2 link-dark">Release Notes</a></li>
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