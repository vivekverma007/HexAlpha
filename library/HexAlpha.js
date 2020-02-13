/* -- HexAlpha Library --
 * Build: https://github.com/vivekverma007/HexAlpha
 *
 * MIT License
 *
 * Copyright (c) 2020 vivekverma
 * Copyright (c) 2017-20 virtualiz.me@gmail.com
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
function HexAlphaTo(e,t,o){e=AlphaColor(e=(e="#"==e[0]?e:window.getComputedStyle(document.documentElement).getPropertyValue(e)).trim(),t),document.documentElement.style.setProperty(o,e)}function HexAlpha(e,t){return e=AlphaColor(e=(e="#"==e[0]?e:window.getComputedStyle(document.documentElement).getPropertyValue(e)).trim(),t)}function AlphaColor(e,t){return"0"==t?e+="0D":"0.1"==t?e+="26":"0.2"==t?e+="40":"0.3"==t?e+="59":"0.4"==t?e+="73":"0.5"==t?e+="8C":"0.6"==t?e+="A6":"0.7"==t?e+="BF":"0.8"==t?e+="D9":"0.9"==t?e+="F2":"1"==t?e+="FF":e=e,e}