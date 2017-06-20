"use strict";angular.module("angularSiteApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","angularSiteApp.services","wu.masonry","slick","fox.scrollReveal"]).run(["$rootScope",function(a){a.$on("$locationChangeSuccess",function(a){jQuery("html, body").delay(700).animate({scrollTop:0},80)})}]).config(["$routeProvider","$locationProvider",function(a,b){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/work/:projectId",{templateUrl:"views/project.html",controller:"ProjectCtrl",controllerAs:"project"}).when("/capabilities",{templateUrl:"views/capabilities.html",controller:"CapabilitiesCtrl",controllerAs:"capabilities"}).when("/work",{templateUrl:"views/work.html",controller:"WorkCtrl",controllerAs:"work"}).otherwise({redirectTo:"/"})}]).config(["$locationProvider",function(a){a.html5Mode(!1),a.hashPrefix("")}]),angular.module("angularSiteApp.services",[]).factory("Projects",["$http","$q",function(a,b){var c={};return c.all=function(){return a.get("../data/projects.json")},c}]),angular.module("angularSiteApp").controller("MainCtrl",["$scope","Projects",function(a,b){a.pageClass="page-home",b.all().then(function(b){a.projects=b.data.projects,a.quantity=5})}]),angular.module("angularSiteApp").controller("ProjectCtrl",["$scope","Projects","$routeParams","$filter","$timeout","$window",function(a,b,c,d,e,f){a.pageClass="page-project",b.all().then(function(b){var e=b.data.projects;a.relatedProjects=[],a.project=d("filter")(e,{handle:c.projectId})[0],a.data=d("filter")(e,{type:a.project.type,handle:"!"+c.projectId}),angular.forEach(a.data,function(b){a.relatedProjects.push({project:b,order:.5-f.Math.random()})}),console.log(a.project),console.log(a.relatedProjects)})}]),$(document).ready(function(){function a(){var a=$(window).scrollTop();$(window).width()<420?($(".parallax").css("top",-(a*-.0245)+"rem"),$(".parallax .content").css("top",-(a*-.0245)+"rem")):($(".parallax").css("top",-(a*-.0245)+"rem"),$(".parallax .content").css("top",-(a*-.0245)+"rem"),$(".parallax div").css("opacity",1-75e-5*a))}function b(){$("header ul li").addClass("show")}function c(){$("header").removeClass("open")}$(window).scroll(function(b){a()});var d=$("header");$(".burger").click(function(){d.hasClass("open")?($("header ul li").removeClass("show"),setTimeout(c,500)):($("header").addClass("open"),setTimeout(b,500))}),$(".nav a").click(function(){$("header ul li").removeClass("show"),setTimeout(c,500)})}),angular.module("angularSiteApp").controller("CapabilitiesCtrl",function(){}),angular.module("angularSiteApp").controller("ContactCtrl",["$scope","$http",function(a,b){a.success=!1,a.error=!1,a.sendMessage=function(c){b({method:"POST",url:"/contact-form.php",data:c,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).success(function(b){b.success?a.success=!0:a.error=!0})}}]),angular.module("angularSiteApp").controller("WorkCtrl",["$scope","Projects",function(a,b){b.all().then(function(b){a.projects=b.data.projects})}]),angular.module("angularSiteApp").controller("NavCtrl",["$scope","$location",function(a,b){a.$location=b}]),angular.module("angularSiteApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/capabilities.html",'<div class="page-content2"> <div class="two-col-title-text load-reveal"> <div class="container"> <div class="row"> <div class="col-md-3 col-md-offset-1"> <h3 class="orange-text">What I do</h3> </div> <div class="col-md-7"> <h2>I create effective stratagies, meaningful products, seamless interactions and unforgetable experiences.</h2> </div> </div> </div> </div> <div class="hero2 orange load-reveal2"> <div class="container-fluid"> <div class="row"> <div class="col-md-5"> <div class="text col-lg-6 load-reveal3"> <h2>Strategy</h2> <p>To gain a competitive advantage, organisations require holistic thinking right accross their business. I work with businesses to clarify their purpose, find their voice, understand their customers, and define their goals.</p> </div> </div> <div class="col-md-7"> <div class="image" style="background-image: url(\'../images/process/strategy.jpg\'); background-size: cover; background-position: right"></div> </div> </div> </div> </div> <!-- <div class="hero2 white right">\n    <div class="container-fluid">\n      <div class="row">\n        <div class="col-md-5">\n          <div class="text col-lg-6">\n            <div class="">\n              <h3>Design</h3>\n              <hr>\n            </div>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ultricies neque at volutpat. In ultricies, purus quis fringilla finibus, est ante ullamcorper magna, ut molestie nulla purus eu magna. Morbi et ultrices urna. Donec sit amet rutrum mauris. Donec eu viverra diam. In hac habitasse platea dictumst. Vestibulum aliquet vulputate turpis ac tincidunt.</p>\n          </div>\n        </div>\n        <div class="col-md-7">\n          <div class="image" style="background-image: url(\'../img/process/design.jpg\'); background-size: cover; background-position: left;"></div>\n        </div>\n      </div>\n    </div>\n  </div> --> <div class="hero2 white right reveal"> <div class="container-fluid"> <div class="row"> <div class="col-md-5"> <div class="text col-lg-6 second-reveal"> <h2>Product</h2> <p>While studying Industrial Design at Loughbororugh University I have learned and developed my process in 3D design. My skills in 3D design allow me tie the user experience goals with the physical product to produce an </p> </div> </div> <div class="col-md-7"> <div class="image" style="background-image: url(\'../images/process/product.jpg\'); background-size: cover; background-position: right"></div> </div> </div> </div> </div> <div class="hero2 white reveal"> <div class="container-fluid"> <div class="row"> <div class="col-md-5"> <div class="text col-lg-6 second-reveal"> <h2>Digital</h2> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ultricies neque at volutpat. In ultricies, purus quis fringilla finibus, est ante ullamcorper magna, ut molestie nulla purus eu magna. Morbi et ultrices urna. Donec sit amet rutrum mauris. Donec eu viverra diam. In hac habitasse platea dictumst. Vestibulum aliquet vulputate turpis ac tincidunt.</p> </div> </div> <div class="col-md-7"> <div class="image" style="background-image: url(\'../images/process/digital.png\'); background-size: contain; background-position: right"></div> </div> </div> </div> </div> <div class="hero2 dark right reveal"> <div class="container-fluid"> <div class="row"> <div class="col-md-5"> <div class="text col-lg-6 second-reveal"> <h2>Development</h2> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ultricies neque at volutpat. In ultricies, purus quis fringilla finibus, est ante ullamcorper magna, ut molestie nulla purus eu magna. Morbi et ultrices urna. Donec sit amet rutrum mauris. Donec eu viverra diam. In hac habitasse platea dictumst. Vestibulum aliquet vulputate turpis ac tincidunt.</p> </div> </div> <div class="col-md-7"> <div class="image" style="background-image: url(\'../images/process/interactions.png\'); background-size: contain; background-position: bottom"></div> </div> </div> </div> </div> <div class="one-col-callout light-grey-bg"> <div class="container"> <div class="col-md-8 col-md-offset-2 reveal"> <h1>Get in touch</h1> <p>Got a project in mind? I’m always interested in new projects, send me a message.</p> <button type="button" class="primary-btn">Get in touch</button> <p class="body-font">Forms not your thing send me an <a href="#" class="bold lowercase">email</a></p> </div> </div> </div> </div>'),a.put("views/contact.html",'<div class="container form"> <form method="post" name="form" role="form" ng-submit="form.$valid && sendMessage(input)" novalidate> <p ng-show="success">Thanks for getting in touch!</p> <p ng-show="error">Something wrong happened!, please try again.</p> <legend>Contact</legend> <fieldset> <div> <label for="name">Name:</label> <input type="text" id="name" name="name" ng-model="input.name" required> </div> <div> <label for="email">Email:</label> <input type="email" id="email" name="email" ng-model="input.email" required> </div> <div> <label for="messsage">Message:</label> <textarea id="messsage" name="message" ng-model="input.message" required></textarea> </div> </fieldset> <button type="submit" name="submit" value="submit">Submit</button> </form> </div>'),a.put("views/main.html",'<div class="hero parallax"> <div class="img"></div> <div class="container"> <div class="row"> <div class="content col-md-8 reveal"> <h4>MY NAME IS MAX HUMBERSTONE</h4> <h1>I love crafting beautiful, smart and inspired work.</h1> <p>I am a designer practicing in <span class="black">user experience design</span>, <span class="black">visual design</span>, <span class="black">industrial design</span> and <span class="black">front-end development</span>.</p> </div> </div> </div> </div> <div class="one-col-callout" data-sr="enter bottom over 1s and move 300px "> <div class="container"> <div class="col-md-8 col-md-offset-2 reveal"> <h2>The creative blend of design and technology to craft beautiful ideas, products and services.</h2> </div> </div> </div> <div class="three-grid-showcase light-grey-bg" data-sr="enter bottom over 1s and move 300px "> <div class="container-fluid"> <div class="row"> <div class="col-md-6 text"> <h4>Innovation & experince design</h4> <h2>Using an intergrated approach with user needs at the core - I work to find creative solutions that ignite change and foster lasting relationships bewteen brands and their customers.</h2> <p>I am a digital product designer living in London, UK who specialises in user experience design. Practicing in UI and UX, along with a background in industrial design, allows me to produce products and services that enhance user experiences across multiple platforms and touch points. I also produce handmade responsive code in a variety of languages.</p> <p>I believe in designing products which see the solution as an interconnected whole, that is part of a larger system and is experienced by user across multiple touch points. By considering secondary elements to a design this allows the end to end user experience of a product or service to be addressed and exceed the expectations of the user.</p> <p>My greatest strength is the ability to rapidly ideate, develop and test creative solutions with attention to detail. This is possible with extensive knoledge in digital and physical prototyping tools to quickly develop, high-fidelity concepts and test with real users early in the design process to ensure the product meets user needs.</p> </div> <div class="col-md-6 images"> <div class="row"> <div class="col-md-12 col-sm-6 image" style="background-image: url(\'../images/about-me.png\')"></div> <div class="col-md-12 col-sm-6 hidden-xs image" style="background-image: url(\'../images/stickies.jpg\')"></div> </div> </div> </div> </div> </div> <div class="one-col-callout" data-sr="enter bottom over 1s and move 300px"> <div class="container"> <div class="col-md-10 col-md-offset-1 reveal"> <h2>Experience accross multiple sectors and diciplines.</h2> <div class="col-md-8 col-md-offset-2"> <img class="company-logos" src="images/company-logos.jpg" alt="IBM Sterling Moulded Composites Promethean"> </div> </div> </div> </div> <!-- <div class="masonry-grid-home" data-sr="enter bottom over 1s and move 300px">\n    <div masonry load-images="false">\n      <div class="masonry-brick-home {{ project.grid_size }}" ng-repeat="project in projects">\n        <div class="image" style="background-image: url(\'images/{{ project.hero.src }}\')"></div>\n      </div>\n    </div>\n</div> --> <div class="project-gallery" data-sr="enter bottom over 1s and move 300px "> <div class="row"> <a href="#/work/{{project.handle}}" ng-repeat="project in projects | limitTo:quantity"> <div ng-if="project.featured" class="col-md-6 tile feature"> <div class="img" style="background-image: url(\'images/{{ project.hero.src }}\')"></div> <div class="content"> <div class="text"> <h4>{{ project.type }}</h4> <h2>{{ project.title }}</h2> </div> </div> </div> <div ng-if="!project.featured" class="col-md-4 tile"> <div class="img" style="background-image: url(\'images/{{ project.hero.src }}\')"></div> <div class="content"> <div class="text"> <h4>{{ project.type }}</h4> <h2>{{ project.title }}</h2> </div> </div> </div> </a> </div> <div class="view-more"> <a href="#/work">View all projects</a> </div> </div> <div class="one-col-callout light-grey-bg" id="contact"> <div class="container" data-sr="enter bottom over 1s and move 300px"> <div class="col-md-8 col-md-offset-2 reveal"> <h1>Get in touch</h1> <p>Got a project in mind? I’m always interested in new projects, send me a message.</p> <a href="mailto:maxhumberstonedesigns@gmail.com" target="_top"> <button type="button" class="primary-btn">Get in touch</button> </a> <!-- <p class="body-font">Forms not your thing send me an <a href="#" class="bold lowercase">email</a></p> --> </div> </div> </div> <script type="text/javascript">$(\'.nav .contact\').click(function() {\n  console.log("clicked");\n  $(\'html, body\').animate({\n    scrollTop: $("#contact").offset().top + \'px\'\n  }, \'slow\');\n});</script>'),a.put("views/project.html",'<div class="full-width-header parallax {{ project.textColour }}"> <div class="container"> <div class="row"> <div class="col-md-10"> <h1>{{ project.heading }}</h1> <p>{{ project.subheading }}</p> </div> </div> <div class="row"> <div class="three-col-row"> <div class="col-md-4"> <h4>Client</h4> <p>{{ project.client }}</p> <a ng-if="project.link" href="#">Visit site</a> </div> <div class="col-md-4"> <h4>Challenge</h4> <p>{{ project.challenge }}</p> </div> <div class="col-md-4"> <h4>Outcome</h4> <p>{{ project.outcome }}</p> </div> </div> </div> </div> </div> <div class="page-content"> <div class="full-width-image" data-sr="enter bottom over 1s and move 300px"> <div class="image half-height" style="background-image: url(\'../images/{{ project.hero.src }}\')"></div> </div> <div class="container mobile-three-row" data-sr="enter bottom over 1s and move 300px"> <div class="row"> <div class="three-col-row"> <div class="col-md-4"> <h4>Client</h4> <p>{{ project.client }}</p> <a ng-if="project.link" href="#">Visit site</a> </div> <div class="col-md-4"> <h4>Challenge</h4> <p>{{ project.challenge }}</p> </div> <div class="col-md-4"> <h4>Outcome</h4> <p>{{ project.outcome }}</p> </div> </div> </div> </div> <div class="one-col-text" ng-if="project.glance" data-sr="enter bottom over 1s and move 300px"> <div class="container border"> <div class="row"> <div class="col-md-12"> <h4>At a glance</h4> <p>{{ project.glance }}</p> </div> </div> </div> </div> <div ng-if="project.section1" class="two-col-title-text" data-sr="enter bottom over 1s and move 300px"> <div class="container"> <div class="row"> <div class="col-md-8"> <h4>{{ project.section1.title}}</h4> <h2>{{ project.section1.heading }}</h2> <p>{{ project.section1.content }}</p> </div> </div> </div> </div> <div class="full-width-image" ng-if="!project.image1.twoCol && project.image1" data-sr="enter bottom over 1s and move 300px"> <div class="image half-height" style="background-image: url(\'../images/{{ project.image1.src }}\')"></div> </div> <div class="two-col-img" ng-if="project.image1.twoCol && project.image1" data-sr="enter bottom over 1s and move 300px"> <div class="row"> <div class="col-sm-6 tile"> <img src="../images/{{ project.image1.src }}" alt="{{ project.image1.alt }}"> </div> <div class="col-sm-6 tile"> <img src="../images/{{ project.image1.src2 }}" alt="{{ project.image1.alt }}"> </div> </div> </div> <div class="process"> <div ng-if="project.process" class="one-col-text"> <div class="container"> <div class="row" ng-repeat="process in project.process" data-sr="enter bottom over 1s and move 300px"> <div class="container border content"> <div class="row"> <div class="col-md-12"> <h4 ng-if="process.title">{{ process.title }}</h4> <h2 ng-if="process.heading">{{ process.heading }}</h2> <p ng-if="process.content">{{ process.content }}</p> </div> </div> </div> <div class="container"> <div class="col-md-12" ng-if="!process.twoCol"> <img ng-if="!process.mobileImage" src="../images/{{ process.image }}" alt=""> <img class="hidden-sm hidden-xs" ng-if="process.mobileImage" src="../images/{{ process.image }}" alt=""> <img class="hidden-md hidden-lg" ng-if="process.mobileImage" src="../images/{{ process.mobileImage }}" alt=""> </div> <div class="col-md-6" ng-if="process.twoCol"> <img src="../images/{{ process.image }}" alt=""> </div> <div class="col-md-6" ng-if="process.twoCol"> <img src="../images/{{ process.image2 }}" alt=""> </div> </div> </div> </div> </div> </div> <div ng-if="project.section2" class="two-col-title-text" data-sr="enter bottom over 1s and move 300px"> <div class="container"> <div class="row"> <div class="col-md-8"> <h4>{{ project.section2.title}}</h4> <h2>{{ project.section2.heading }}</h2> <p>{{ project.section2.content }}</p> </div> </div> </div> </div> <div class="two-col-img" ng-if="!project.image2.twoCol && project.image2" data-sr="enter bottom over 1s and move 300px"> <div class="row"> <div class="col-sm-12 tile"> <img src="../images/{{ project.image2.src }}" alt="{{ project.image2.alt }}"> </div> </div> </div> <div class="two-col-img" ng-if="project.image2.twoCol && project.image2" data-sr="enter bottom over 1s and move 300px"> <div class="row"> <div class="col-sm-6 tile"> <img src="../images/{{ project.image2.src }}" alt="{{ project.image2.alt }}"> </div> <div class="col-sm-6 tile"> <img src="../images/{{ project.image2.src2 }}" alt="{{ project.image2.alt }}"> </div> </div> </div> <div ng-if="project.section3" class="two-col-title-text" data-sr="enter bottom over 1s and move 300px"> <div class="container"> <div class="row"> <div class="col-md-8"> <h4>{{ project.section3.title }}</h4> <h2>{{ project.section3.heading }}</h2> <p>{{ project.section3.content }}</p> </div> </div> </div> </div> <div class="masonry-grid" ng-if="project.grid_images" data-sr="enter bottom over 1s and move 300px"> <div class="container"> <div masonry load-images="false"> <div class="masonry-brick {{ image.size }}" ng-repeat="image in project.grid_images"> <div class="image {{ image.size }}"> <img src="../images/{{ image.src }}" alt="{{ image.alt }}"> </div> <p class="description">{{ image.description }}</p> </div> </div> </div> </div> <div class="two-col-img" ng-if="!project.image4.twoCol && project.image4" data-sr="enter bottom over 1s and move 300px"> <div class="row"> <div class="col-sm-12 tile"> <img src="../images/{{ project.image4.src }}" alt="{{ project.image4.alt }}"> </div> </div> </div> <div class="two-col-img" ng-if="project.image4.twoCol && project.image4" data-sr="enter bottom over 1s and move 300px"> <div class="row"> <div class="col-sm-6 tile"> <img src="../images/{{ project.image4.src }}" alt="{{ project.image4.alt }}"> </div> <div class="col-sm-6 tile"> <img src="../images/{{ project.image4.src2 }}" alt="{{ project.image5.alt }}"> </div> </div> </div> <div ng-if="project.section4" class="two-col-title-text" data-sr="enter bottom over 1s and move 300px"> <div class="container"> <div class="row"> <div class="col-md-8"> <h4 ng-if="project.section4.title">{{ project.section4.title}}</h4> <h2>{{ project.section4.heading }}</h2> <p>{{ project.section4.content }}</p> </div> </div> </div> </div> <div class="full-width-image" data-sr="enter bottom over 1s and move 200px" ng-repeat="image in project.showcase"> <div class="image-caption" ng-if="image.captionTitle"> <div class="container"> <div class="row"> <div class="col-md-8"> <h4>{{ image.captionTitle }}</h4> <p>{{ image.captionText }}</p> </div> </div> </div> </div> <div class="image" style="background-image: url(\'../images/{{ image.src }}\')" ng-if="!image.twoCol && !image.desktop && !image.tabletMobile && !image.mobile2 && !image.mobile3"></div> <div class="image-two-col" ng-if="image.twoCol"> <div class="container-fluid"> <div class="row"> <div class="col-md-6 col"> <div class="image" style="background-image: url(\'../images/{{ image.src }}\')"></div> </div> <div class="col-md-6 col"> <div class="image" style="background-image: url(\'../images/{{ image.src2 }}\')"></div> </div> </div> </div> </div> <div class="image-screen" ng-if="image.desktop"> <div class="container"> <div class="row"> <div class="col-md-12"> <img src="../images/{{ image.src }}" alt=""> </div> </div> </div> </div> <div class="image-screen" ng-if="image.tabletMobile"> <div class="container"> <div class="row"> <div class="col-md-8 col"> <img src="../images/{{ image.src }}" alt=""> </div> <div class="col-sm-4 col"> <img src="../images/{{ image.src2 }}" alt=""> </div> </div> </div> </div> <div class="image-screen" ng-if="image.mobile2"> <div class="container"> <div class="row"> <div class="col-sm-4 col col-md-offset-2"> <img src="../images/{{ image.src }}" alt=""> </div> <div class="col-sm-4 col"> <img src="../images/{{ image.src2 }}" alt=""> </div> </div> </div> </div> <div class="image-screen" ng-if="image.mobile3"> <div class="container"> <div class="row"> <div class="col-sm-4 col"> <img src="../images/{{ image.src }}" alt=""> </div> <div class="col-sm-4 col"> <img src="../images/{{ image.src2 }}" alt=""> </div> <div class="col-sm-4 col"> <img src="../images/{{ image.src3 }}" alt=""> </div> </div> </div> </div> </div> <!-- <slick dots=true autoplay=true autoplay-speed=6000 class="showcase-carousel" data-sr="enter bottom over 1s and move 300px">\n    <div class="slide" ng-repeat="image in project.showcase" style="background-image: url(\'../images/{{ image.src }}\')">\n      <div class="description" ng-if="image.description">\n        <div class="container">\n          <div class="col-md-4">\n            <p>{{ image.description }}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </slick> --> <div class="one-col-callout" data-sr="enter bottom over 1s and move 300px" id="contact"> <div class="container"> <div class="col-md-8 col-md-offset-2 reveal"> <h1>Ready to chat?</h1> <p>Got a project in mind? I’m always interested in new projects, send me a message.</p> <a href="mailto:maxhumberstonedesigns@gmail.com" target="_top"> <button type="button" class="primary-btn">Get in touch</button> </a> <!-- <p class="body-font">Forms not your thing send me an <a href="#" class="bold lowercase">email</a></p> --> </div> </div> </div> <div class="project-gallery related-projects" data-sr="enter bottom over 1s and move 300px"> <h2>Related Projects</h2> <div class="row"> <a href="#/work/{{project.project.handle}}" ng-repeat="project in relatedProjects | orderBy:\'order\' | limitTo: 2"> <div class="col-md-6 tile feature"> <div class="img" style="background-image: url(\'images/{{ project.project.hero.src }}\')"></div> <div class="content"> <div class="text"> <h4>{{ project.project.type }}</h4> <h2>{{ project.project.title }}</h2> </div> </div> </div> </a> </div> </div> <!-- <div ng-if="project.showcase" class="full-width-image">\n    <div ng-repeat="image in project.showcase" class="image" style="background-image: url(\'../images/{{ image.src }}\')"></div>\n  </div> --></div>'),a.put("views/work.html",'<div class="page-content2"> <div class="filter-bar"> <div class="container"> <ul> <li data-filter="*" class="selected">All work</li> <li data-filter="product">Product</li> <li data-filter="digital">Digital</li> </ul> </div> </div> <div class="project-gallery"> <div class="row"> <a href="#/work/{{project.handle}}" ng-repeat="project in projects"> <div class="col-md-6 tile feature"> <div class="img" style="background-image: url(\'images/{{ project.hero.src }}\')"></div> <div class="content"> <div class="text"> <h4>{{ project.type }}</h4> <h2>{{ project.title }}</h2> </div> </div> </div> </a> </div> </div> <div class="one-col-callout" data-sr="enter bottom over 1s and move 300px" id="contact"> <div class="container"> <div class="col-md-8 col-md-offset-2 reveal"> <h1>Ready to chat?</h1> <p>Got a project in mind? I’m always interested in new projects, send me a message.</p> <a href="mailto:maxhumberstonedesigns@gmail.com" target="_top"> <button type="button" class="primary-btn">Get in touch</button> </a> <!-- <p class="body-font">Forms not your thing send me an <a href="#" class="bold lowercase">email</a></p> --> </div> </div> </div> </div>')}]);