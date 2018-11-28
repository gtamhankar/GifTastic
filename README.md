# Giftastic! giphy! 
Assignment 6 -  Use of GIPHY API to make a dynamic web page that populates gifs of user's choice. 

Submitted On: 11/28/2018

## Technologies: node.js, javascrpt, giphy api, html, css , bootstrap

This is assignment 6: https://unc.bootcampcontent.com/UNC-Coding-Boot-Camp/UNCHILL201808FSF3/blob/master/homework/06-ajax/homework.md

* Primary Input code Files: index.html, giphy.js
* Output: webpage index.html


### Application Specific Details:
-----------------------------
                  
			
### Features:
----------
* Tried to implement adminlte template. This is open source bootstrap based dashboard from MIT student. - https://adminlte.io/
* The purpose to use adminlte and simplifying it was to create my own template and be able to use specific components from a comprehensive full stack project.
* Used moment.js to format the date.


### Notes & Limitations:
--------------------
image/giphy formatting overflow needs to be taken care of! A separate class could have been written to format giphies.
Data Validations and formatting can be added before displaying the gifs on the page.

### Logic:
-------
This is event driven page. 
On click of buttons/ search categories from the side bar, 9 giphies are pulled from api.giphy.com with pg-13 or below rating and in english language.
By default, still images are loaded. User may click on the image to review the animation.
on each click on gif file, it changes the mode to still or animation.
Title, rating and trending date (formatted using moment.js) are also displayed along with the gif.

	
### Run Instructions:
--------------
To run locally:

1) Clone or download this git repository.
2) Run index.html in your web browser. 
3) Enter category for search and click on search icon. 
4) User may try using exisitng categories or clear the contents of the page. 
