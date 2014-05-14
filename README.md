FormGrabber for Grabbing!
=========================

Description
---------------------

FormGrabber is a simple jQuery plugin for grabbing datas from a form. It is still being polished, so forgive me (this is my first real one). 

Why?
----
Web development is obviously growing and I highly recommend using something like backbone or angular. However, if you have a project or just need to quickly strip out form data, than this is for you!

How To Use
----------

**js**
```javascript
    var data = $('form').grab();
```

This is the most simple way to get started. It will collect data from all inputs, selects, and textareas, and put them into a simple object that you can dot into. You can use formgrabber from specific elements.

**html**
```html
<form>
	<div id="userInfo">
		<input type="text" name="name">
		<input type="text" age="age">
	</div>
	<div id="foodInfo">`
		<input type="text" name="food">
	</div>
</form>
```
**js**
```javascript
    var food = $('#foodInfo').grab();
```

That should get you the data within the foodInfo div. 

Options
-------
What would a plugin be without some options. Right now you have only a couple options, but it still helps!

**js**
```javascript
var data = $('form').grab({allowBlank: true});
```
By setting allowBlank to true, you are allowing any empty elements to be mapped to your object. By default, it is set to false and will ignore any inputs that are not filled out.

**js**
```javascript
var data = $('form').grab({format: 'json'});
```
For some reason, if you just want your objects to be in the form of JSON, you can just set the format. By default it is set to 'object' which means javascript object.

**js**
```javascript
var data = $('form').grab({findBy: 'id'});
```
If you want to pull the data out of your form by a specific attr, use findBy. The default is set to 'name'.

**html**
```html
	<input type="text" name="fish">
	<input type="text" name="lamp">
	<input type="hidden" name="_token">
```
**js**
```javascript
var data = $('form').grab({exclude: ['_token','lamp']});
```
If you need to exclude certain things for the data return, than pass them as an array. There may be hidden fields you don't need for whatever reason you don't need them.

In Conclusion
-------------
Sure, there are plenty of frameworks that do model-form binding. However, in the case you need a really quick way to pull out form data, use this! Combine it with something like underscore.js to give collection functions and it might be what you need!