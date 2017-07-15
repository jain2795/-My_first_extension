// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var min = 0;
var max = 4;
var count = min;
var color=['red','black','blue','green','white'];
function updateIcon() {
	
  chrome.browserAction.setIcon({path:color[count] + ".png"});
  count++;

  if (count > max)
    count = min;
}

chrome.browserAction.onClicked.addListener(updateIcon);
updateIcon();
