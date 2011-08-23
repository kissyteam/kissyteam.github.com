.. currentmodule:: Overlay

从 Markup 中构建 Overlay
========================================================

|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/overlay/>`_

Class
-----------------------------------------------

  * :class:`~overlay.Overlay`

从 Markup 中构建 Overlay
----------------------------------------------------------

    .. raw:: html


        <iframe width="100%" height="300" class="iframe-demo" src="../../../static/demo/overlay/demo1.html"></iframe>

    
    **组织 HTML 结构**

    .. code-block:: html

        <a style="cursor:pointer"><img id="img-download" src="assets/nav-download.png"/></a>
        <div class="popup" id="dpop">
            <table>
                <tr>
                    <td class="corner" id="topleft"></td>
                    <td class="top"></td>
                    <td class="corner" id="topright"></td>
            	</tr>
            	<tr>
            		<td class="left"></td>
            		<td>
            		<table class="popup-contents">
                        <tr>
                        	<th>File:</th>
                        	<td>coda 1.7.zip</td>
                        </tr>
                        <tr>
                        	<th>Date:</th>
                        	<td>11/5/10</td>
                        </tr>
                        <tr>
                        	<th>Size:</th>
                        	<td>20 MB</td>
                        </tr>
                        <tr>
                        	<th>Req:</th>
                        	<td>Mac OS X 10.4+</td>
                        </tr>
                        <tr id="release-notes">
                        	<th>Read the release notes:</th>
                        	<td><a href="#" title="Read the release notes">release notes</a></td>
                        </tr>
            		</table></td>
            		<td class="right"></td>
            	</tr>
            	<tr>
            		<td id="bottomleft" class="corner"></td>
            		<td class="bottom"><img src="assets/bubble-tail2.png" width="30" height="29" alt="popup tail"/></td>
            		<td class="corner" id="bottomright"></td>
            	</tr>
            </table>
		</div>
		<div>
            <button id="d1" class="button">
            	destroy
            </button>
		</div>


    **JS初始化**

    .. literalinclude:: /_static/demo/overlay/assets/demo1.js
           :language: javascript