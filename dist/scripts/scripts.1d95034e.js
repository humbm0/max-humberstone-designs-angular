"use strict";angular.module("angularSiteApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","angularSiteApp.services","wu.masonry"]).run(["$rootScope",function(a){a.$on("$locationChangeSuccess",function(a){jQuery("html, body").delay(700).animate({scrollTop:0},80)})}]).config(["$routeProvider","$locationProvider",function(a,b){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/projects/:projectId",{templateUrl:"views/project.html",controller:"ProjectCtrl",controllerAs:"project"}).when("/capabilities",{templateUrl:"views/capabilities.html",controller:"CapabilitiesCtrl",controllerAs:"capabilities"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl",controllerAs:"contact"}).when("/work",{templateUrl:"views/work.html",controller:"WorkCtrl",controllerAs:"work"}).otherwise({redirectTo:"/"})}]).config(["$locationProvider",function(a){a.html5Mode(!1),a.hashPrefix("")}]),angular.module("angularSiteApp.services",[]).factory("Projects",["$http","$q",function(a,b){var c={};return c.all=function(){return a.get("../data/projects.json")},c}]),angular.module("angularSiteApp").controller("MainCtrl",["$scope","Projects",function(a,b){a.pageClass="page-home",b.all().then(function(b){a.projects=b.data.projects,a.quantity=6})}]),angular.module("angularSiteApp").controller("ProjectCtrl",["$scope","Projects","$routeParams","$filter","$timeout","$window",function(a,b,c,d,e,f){a.pageClass="page-project",b.all().then(function(b){var e=b.data.projects;a.relatedProjects=[],a.project=d("filter")(e,{handle:c.projectId})[0],a.data=d("filter")(e,{type:a.project.type,handle:"!"+c.projectId}),angular.forEach(a.data,function(b){a.relatedProjects.push({project:b,order:.5-f.Math.random()})}),console.log(a.project),console.log(a.relatedProjects)}),e(function(){$(".showcase-carousel").slick({dots:!0,infinite:!1,autoplay:!0,autoplaySpeed:6e3})})}]),$(document).ready(function(){function a(){var a=$(window).scrollTop();$(window).width()<420?($(".parallax").css("top",-(a*-.0245)+"rem"),$(".parallax .content").css("top",-(a*-.0245)+"rem")):($(".parallax").css("top",-(a*-.0245)+"rem"),$(".parallax .content").css("top",-(a*-.0245)+"rem"),$(".parallax div").css("opacity",1-75e-5*a))}function b(){$("header ul li").addClass("show")}function c(){$("header").removeClass("open")}$(window).scroll(function(b){a()});var d=$("header");$(".burger").click(function(){d.hasClass("open")?($("header ul li").removeClass("show"),setTimeout(c,500)):($("header").addClass("open"),setTimeout(b,500))})}),angular.module("angularSiteApp").controller("CapabilitiesCtrl",function(){}),angular.module("angularSiteApp").controller("ContactCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("angularSiteApp").controller("WorkCtrl",["$scope","Projects",function(a,b){b.all().then(function(b){a.projects=b.data.projects})}]),angular.module("angularSiteApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/capabilities.html",'<div class="page-content2"> <div class="two-col-title-text load-reveal"> <div class="container"> <div class="row"> <div class="col-md-3 col-md-offset-1"> <h3 class="orange-text">What I do</h3> </div> <div class="col-md-7"> <h2>I create effective stratagies, meaningful products, seamless interactions and unforgetable experiences.</h2> </div> </div> </div> </div> <div class="hero2 orange load-reveal2"> <div class="container-fluid"> <div class="row"> <div class="col-md-5"> <div class="text col-lg-6 load-reveal3"> <h2>Strategy</h2> <p>To gain a competitive advantage, organisations require holistic thinking right accross their business. I work with businesses to clarify their purpose, find their voice, understand their customers, and define their goals.</p> </div> </div> <div class="col-md-7"> <div class="image" style="background-image: url(\'../images/process/strategy.jpg\'); background-size: cover; background-position: right"></div> </div> </div> </div> </div> <!-- <div class="hero2 white right">\n    <div class="container-fluid">\n      <div class="row">\n        <div class="col-md-5">\n          <div class="text col-lg-6">\n            <div class="">\n              <h3>Design</h3>\n              <hr>\n            </div>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ultricies neque at volutpat. In ultricies, purus quis fringilla finibus, est ante ullamcorper magna, ut molestie nulla purus eu magna. Morbi et ultrices urna. Donec sit amet rutrum mauris. Donec eu viverra diam. In hac habitasse platea dictumst. Vestibulum aliquet vulputate turpis ac tincidunt.</p>\n          </div>\n        </div>\n        <div class="col-md-7">\n          <div class="image" style="background-image: url(\'../img/process/design.jpg\'); background-size: cover; background-position: left;"></div>\n        </div>\n      </div>\n    </div>\n  </div> --> <div class="hero2 white right reveal"> <div class="container-fluid"> <div class="row"> <div class="col-md-5"> <div class="text col-lg-6 second-reveal"> <h2>Product</h2> <p>While studying Industrial Design at Loughbororugh University I have learned and developed my process in 3D design. My skills in 3D design allow me tie the user experience goals with the physical product to produce an </p> </div> </div> <div class="col-md-7"> <div class="image" style="background-image: url(\'../images/process/product.jpg\'); background-size: cover; background-position: right"></div> </div> </div> </div> </div> <div class="hero2 white reveal"> <div class="container-fluid"> <div class="row"> <div class="col-md-5"> <div class="text col-lg-6 second-reveal"> <h2>Digital</h2> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ultricies neque at volutpat. In ultricies, purus quis fringilla finibus, est ante ullamcorper magna, ut molestie nulla purus eu magna. Morbi et ultrices urna. Donec sit amet rutrum mauris. Donec eu viverra diam. In hac habitasse platea dictumst. Vestibulum aliquet vulputate turpis ac tincidunt.</p> </div> </div> <div class="col-md-7"> <div class="image" style="background-image: url(\'../images/process/digital.png\'); background-size: contain; background-position: right"></div> </div> </div> </div> </div> <div class="hero2 dark right reveal"> <div class="container-fluid"> <div class="row"> <div class="col-md-5"> <div class="text col-lg-6 second-reveal"> <h2>Development</h2> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ultricies neque at volutpat. In ultricies, purus quis fringilla finibus, est ante ullamcorper magna, ut molestie nulla purus eu magna. Morbi et ultrices urna. Donec sit amet rutrum mauris. Donec eu viverra diam. In hac habitasse platea dictumst. Vestibulum aliquet vulputate turpis ac tincidunt.</p> </div> </div> <div class="col-md-7"> <div class="image" style="background-image: url(\'../images/process/interactions.png\'); background-size: contain; background-position: bottom"></div> </div> </div> </div> </div> <div class="one-col-callout light-grey-bg"> <div class="container"> <div class="col-md-8 col-md-offset-2 reveal"> <h1>Get in touch</h1> <p>Got a project in mind? I’m always interested in new projects, send me a message.</p> <button type="button" class="primary-btn">Get in touch</button> <p class="body-font">Forms not your thing send me an <a href="#" class="bold lowercase">email</a></p> </div> </div> </div> </div>'),a.put("views/contact.html",'<div class="container"> <div class="row"> <div class="col-md-6 col-md-offset-3"> <h1 class="page-header text-center">Contact Form</h1> <form class="form-horizontal" role="form" method="post" action="index.php"> <div class="form-group"> <label for="name" class="col-sm-2 control-label">Name</label> <div class="col-sm-10"> <input type="text" class="form-control" id="name" name="name" placeholder="First & Last Name" value="<?php echo htmlspecialchars($_POST[\'name\']); ?>"> <?php echo "<p class=\'text-danger\'>$errName</p>";?> </div> </div> <div class="form-group"> <label for="email" class="col-sm-2 control-label">Email</label> <div class="col-sm-10"> <input type="email" class="form-control" id="email" name="email" placeholder="example@domain.com" value="<?php echo htmlspecialchars($_POST[\'email\']); ?>"> <?php echo "<p class=\'text-danger\'>$errEmail</p>";?> </div> </div> <div class="form-group"> <label for="message" class="col-sm-2 control-label">Message</label> <div class="col-sm-10"> <textarea class="form-control" rows="4" name="message"><?php echo htmlspecialchars($_POST[\'message\']);?></textarea> <?php echo "<p class=\'text-danger\'>$errMessage</p>";?> </div> </div> <div class="form-group"> <label for="human" class="col-sm-2 control-label">2 + 3 = ?</label> <div class="col-sm-10"> <input type="text" class="form-control" id="human" name="human" placeholder="Your Answer"> <?php echo "<p class=\'text-danger\'>$errHuman</p>";?> </div> </div> <div class="form-group"> <div class="col-sm-10 col-sm-offset-2"> <input id="submit" name="submit" type="submit" value="Send" class="btn btn-primary"> </div> </div> <div class="form-group"> <div class="col-sm-10 col-sm-offset-2"> <?php echo $result; ?> </div> </div> </form> </div> </div> </div>'),a.put("views/main.html",'<div class="hero parallax"> <!-- <div class="bg-image">\n    <div class="col-md-6"></div>\n    <div class="img col-md-6"></div>\n  </div> --> <!-- <div class="fade">\n    <img id="hero-img" src="images/hero/splash.png">\n      <div class="top">\n          <div class="logo"></div>\n          <div class="menu"></div>\n      </div>\n      <div class="title"></div>\n  </div>\n\n  <script>\n      var fade = document.querySelector(\'.fade\');\n      var topNav = document.querySelector(\'.top\');\n      var title = document.querySelector(\'.title\');\n      var icons = Array.prototype.slice.call(document.querySelectorAll(\'.icon\'));\n      var image = document.getElementById("hero-img");\n      var aquarelle = new Aquarelle(image, \'images/hero/mask.png\', {\n          autoplay: true,\n          loop: false\n      });\n      aquarelle.addEventListener(\'created\', function() {\n          var canvas = this.getCanvas();\n          canvas.removeAttribute(\'style\');\n          image.parentNode.insertBefore(canvas, image.nextSibling);\n          image.parentNode.removeChild(image);\n      });\n      aquarelle.addEventListener(\'changed\', function(event) {\n          fade.style.opacity = this.transitionInRange(1, 1, 7183, 8933);\n          topNav.style.opacity = this.transitionInRange(0, 1, 4330, 5660);\n          var canvas = this.getCanvas();\n          canvas.style.webkitFilter = \'blur(\' + this.transitionInRange(0, 24, 3000) + \'px)\';\n          canvas.style.webkitTransform = canvas.style.transform = \'translate(-50%, -50%) scale(\' + this.transitionInRange(.5, 1) + \')\';\n          title.style.opacity = this.transitionInRange(0, 1, 0, 2016);\n          title.style.webkitTransform = title.style.transform = \'scale(\' + this.transitionInRange(.8, 1, 0, 5883) + \')\';\n          icons.forEach(function(icon) {\n              icon.style.webkitFilter = \'blur(\' + event.target.transitionInRange(4, 0, 3433, 4149) + \'px)\';\n              icon.style.opacity = event.target.transitionInRange(0, 1, 3433, 4266);\n              icon.style.webkitTransform = icon.style.transform = \'scale(\' + event.target.transitionInRange(1.3, 1, 3433, 4400) + \')\';\n          });\n      });\n  </script> --> <div class="container"> <div class="row"> <div class="content col-md-8 col-md-offset-2 reveal"> <h4>MY NAME IS MAX HUMBERSTONE</h4> <h1>I love crafting beautiful, smart and inspired work.</h1> <p>I am a designer practicing in <span class="black">user experience design</span>, <span class="black">visual design</span>, <span class="black">industrial design</span> and <span class="black">front-end development</span>.</p> </div> </div> </div> </div> <div class="one-col-callout bg-image connect-customers"> <div class="container"> <div class="col-md-8 col-md-offset-2 reveal"> <h1>I connect businesses to customers</h1> <p>Applying empathy to every design decision I ensure the solution meets your customer needs and exceeds expectation. </p> <a href="#">Browse my services</a> </div> </div> </div> <div class="two-col-img-text reveal"> <div class="container"> <div class="row"> <div class="col-md-6 column"> <img src="images/stickies.jpg" alt="sticky notes"> </div> <div class="col-md-5 column text right"> <h2>I use an intergrated approach with Customer Needs at the Core.</h2> <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis ex ac feugiat rhoncus. Nam efficitur mauris eget tortor vestibulum, et varius lorem pellentesque. Mauris tincidunt eros eros. </p> <a href="#/capabilities">EXPLORE MY CAPABILITES</a> </div> </div> </div> </div> <div class="project-gallery reveal"> <div class="row"> <a href="#/projects/{{project.handle}}" ng-repeat="project in projects | limitTo:quantity"> <div ng-if="project.featured" class="col-md-6 tile feature"> <div class="img" style="background-image: url(\'images/{{ project.hero.src }}\')"></div> <div class="content"> <h2>{{ project.title }}</h2> </div> </div> <div ng-if="!project.featured" class="col-md-3 tile"> <div class="img" style="background-image: url(\'images/{{ project.hero.src }}\')"></div> <div class="content"> <h2>{{ project.title }}</h2> </div> </div> </a> </div> <div class="view-more"> <a href="#/work">View all projects</a> </div> </div> <div class="two-col-img-text reveal"> <div class="container"> <div class="row"> <div class="col-md-6 column right experience pull-right"> <img class="company-logos" src="images/company-logos.jpg" alt="IBM Sterling Moulded Composites Promethean"> </div> <div class="col-md-5 column text right-align"> <h2>Experience accross multiple sectors and diciplines.</h2> <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis ex ac feugiat rhoncus. Nam efficitur mauris eget tortor vestibulum, et varius lorem pellentesque. Mauris tincidunt eros eros. </p> <a href="#">LEARN MORE ABOUT MY EXPERIENCE</a> </div> </div> </div> </div> <div class="one-col-callout light-grey-bg"> <div class="container"> <div class="col-md-8 col-md-offset-2 reveal"> <h1>Get in touch</h1> <p>Got a project in mind? I’m always interested in new projects, send me a message.</p> <button type="button" class="primary-btn">Get in touch</button> <p class="body-font">Forms not your thing send me an <a href="#" class="bold lowercase">email</a></p> </div> </div> </div>'),a.put("views/project.html",'<div class="full-width-header parallax {{ project.textColour }}"> <div class="container"> <div class="row"> <div class="col-md-10"> <h1>{{ project.heading }}</h1> <p>{{ project.subheading }}</p> </div> </div> <div class="row"> <div class="three-col-row"> <div class="col-md-4"> <h4>Client</h4> <p>{{ project.client }}</p> <a ng-if="project.link" href="#">Visit site</a> </div> <div class="col-md-4"> <h4>Challenge</h4> <p>{{ project.challenge }}</p> </div> <div class="col-md-4"> <h4>Outcome</h4> <p>{{ project.outcome }}</p> </div> </div> </div> </div> </div> <div class="page-content"> <div class="full-width-image"> <div class="image half-height" style="background-image: url(\'../images/{{ project.hero.src }}\')"></div> </div> <div class="container mobile-three-row"> <div class="row"> <div class="three-col-row"> <div class="col-md-4"> <h4>Client</h4> <p>{{ project.client }}</p> <a ng-if="project.link" href="#">Visit site</a> </div> <div class="col-md-4"> <h4>Challenge</h4> <p>{{ project.challenge }}</p> </div> <div class="col-md-4"> <h4>Outcome</h4> <p>{{ project.outcome }}</p> </div> </div> </div> </div> <div ng-if="project.section1" class="two-col-title-text"> <div class="container"> <div class="row"> <div class="col-md-8"> <h4>{{ project.section1.title}}</h4> <h2>{{ project.section2.heading }}</h2> <p>{{ project.section1.content }}</p> </div> </div> </div> </div> <div class="full-width-image"> <div class="image half-height" style="background-image: url(\'../images/{{ project.image1.src }}\')"></div> </div> <div ng-if="project.section2" class="two-col-title-text"> <div class="container"> <div class="row"> <div class="col-md-8"> <h4>{{ project.section2.title}}</h4> <h2>{{ project.section2.heading }}</h2> <p>{{ project.section2.content }}</p> </div> </div> </div> </div> <div class="two-col-img"> <div class="row"> <div class="col-sm-6 tile"> <img src="../images/{{ project.image2.src }}" alt="{{ project.image2.alt }}"> </div> <div class="col-sm-6 tile"> <img src="../images/{{ project.image3.src }}" alt="{{ project.image3.alt }}"> </div> </div> </div> <div ng-if="project.section3" class="two-col-title-text"> <div class="container"> <div class="row"> <div class="col-md-8"> <h4>{{ project.section3.title}}</h4> <h2>{{ project.section3.heading }}</h2> <p>{{ project.section3.content }}</p> </div> </div> </div> </div> <!-- <div class="masonary-grid">\n    <div class="container">\n      <div class="grid">\n        <div class="grid-item {{ image.size }}" ng-repeat="image in project.grid_images">\n          <div class="image {{ image.size }}">\n            <img src="../img/{{ image.src }}" alt="{{ image.alt }}" />\n          </div>\n          <p class="description">{{ image.description }}</p>\n        </div>\n      </div>\n    </div>\n  </div> --> <div class="masonry-grid"> <div class="container"> <div masonry load-images="false"> <div class="masonry-brick {{ image.size }}" ng-repeat="image in project.grid_images"> <div class="image {{ image.size }}"> <img src="../images/{{ image.src }}" alt="{{ image.alt }}"> </div> <p class="description">{{ image.description }}</p> </div> </div> </div> </div> <div ng-if="project.section4" class="two-col-title-text"> <div class="container"> <div class="row"> <div class="col-md-3 col-md-offset-1"> <h3>{{ project.section4.title }}</h3> </div> <div class="col-md-7"> <p>{{ project.section4.content }}</p> </div> </div> </div> </div> <div class="showcase-carousel"> <div class="slide" ng-repeat="image in project.showcase" style="background-image: url(\'../images/{{ image.src }}\')"> <div class="description" ng-if="image.description"> <div class="container"> <div class="col-md-4"> <p>{{ image.description }}</p> </div> </div> </div> </div> </div> <div class="one-col-callout"> <div class="container"> <div class="col-md-8 col-md-offset-2 reveal"> <h1>Ready to chat?</h1> <p>Got a project in mind? I’m always interested in new projects, send me a message.</p> <button type="button" class="primary-btn">Get in touch</button> <p class="body-font">Forms not your thing send me an <a href="#" class="bold lowercase">email</a></p> </div> </div> </div> <div class="project-gallery related-projects"> <h2>Related Projects</h2> <div class="row"> <a href="#/projects/{{project.project.handle}}" ng-repeat="project in relatedProjects | orderBy:\'order\' | limitTo: 2"> <div class="col-md-6 tile feature"> <div class="img" style="background-image: url(\'images/{{ project.project.hero.src }}\')"></div> <div class="content"> <h2>{{ project.project.title }}</h2> <p>{{ project.project.type }}</p> </div> </div> </a> </div> </div> <!-- <div ng-if="project.showcase" class="full-width-image">\n    <div ng-repeat="image in project.showcase" class="image" style="background-image: url(\'../images/{{ image.src }}\')"></div>\n  </div> --></div>'),a.put("views/work.html",'<div class="page-content2"> <div class="filter-bar"> <div class="container"> <ul> <li data-filter="*" class="selected">All work</li> <li data-filter="product">Product</li> <li data-filter="digital">Digital</li> <li data-filter="development">Development</li> </ul> </div> </div> <div class="project-gallery reveal"> <div class="row"> <div infinite-scroll="loadMore()" infinite-scroll-distance="2"> <a href="#/projects/{{project.handle}}" ng-repeat="project in projects" class="project {{ project.type }} fade-in"> <div class="col-md-6 tile feature {{ project.type }}"> <div class="img" style="background-image: url(\'images/{{ project.hero.src }}\')"></div> <div class="content"> <h2>{{ project.title }}</h2> </div> </div> </a> </div> </div> </div> </div>')}]);