

### 02.01.2025

preveous idea about copy paste did not worked because text looks fine and is searchable, but editors will not highlight ﻋﻔﻜﺮﺓ and عفكرة because they are comprised of different chars.  [65227, 65236, 65244, 65198, 65171] vs [1593, 1601, 1603, 1585, 1577].

solution use `event.clipboardData.setData("text/plain", ...);` on `copy` event to remove `&zwj;`


upd: `display: contents;` that I've used to merge the text into one blob, to enable double click selection, actually breaks the grid. text is just rendered as one #text node.
do this approach will not work.

revertin back to `display: ...`;  and using `&zwj;`


### 01.01.2026

we can make copy paste of arabic text seamless (e.g. mouse selection or double click), without additional js or handling if we will use special 'positioned' glyphs instead of generic symbols. Text will be searchable and will look fine.
