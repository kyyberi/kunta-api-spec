/**
 * Kunta API
 * Solution to combine municipality services under single API.
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KuntaApiClient) {
      root.KuntaApiClient = {};
    }
    root.KuntaApiClient.DailyOpeningTime = factory(root.KuntaApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DailyOpeningTime model module.
   * @module model/DailyOpeningTime
   * @version 0.0.90
   */

  /**
   * Constructs a new <code>DailyOpeningTime</code>.
   * @alias module:model/DailyOpeningTime
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>DailyOpeningTime</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DailyOpeningTime} obj Optional instance to populate.
   * @return {module:model/DailyOpeningTime} The populated <code>DailyOpeningTime</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('dayFrom')) {
        obj['dayFrom'] = ApiClient.convertToType(data['dayFrom'], 'Integer');
      }
      if (data.hasOwnProperty('dayTo')) {
        obj['dayTo'] = ApiClient.convertToType(data['dayTo'], 'Integer');
      }
      if (data.hasOwnProperty('from')) {
        obj['from'] = ApiClient.convertToType(data['from'], 'String');
      }
      if (data.hasOwnProperty('to')) {
        obj['to'] = ApiClient.convertToType(data['to'], 'String');
      }
      if (data.hasOwnProperty('isExtra')) {
        obj['isExtra'] = ApiClient.convertToType(data['isExtra'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Day index (0 == Sunday)
   * @member {Integer} dayFrom
   */
  exports.prototype['dayFrom'] = undefined;
  /**
   * Day index (0 == Sunday)
   * @member {Integer} dayTo
   */
  exports.prototype['dayTo'] = undefined;
  /**
   * Start time for example 10:00:00
   * @member {String} from
   */
  exports.prototype['from'] = undefined;
  /**
   * End time for example 20:00:00
   * @member {String} to
   */
  exports.prototype['to'] = undefined;
  /**
   * Set to true to have extra time for a day. Enables to have open times like 10:00-14:00 and also on the same day 16:00-20:00. So the latter time is extra time.
   * @member {Boolean} isExtra
   */
  exports.prototype['isExtra'] = undefined;



  return exports;
}));


