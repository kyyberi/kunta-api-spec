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
    define(['ApiClient', 'model/LocalizedValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LocalizedValue'));
  } else {
    // Browser globals (root is window)
    if (!root.KuntaApiClient) {
      root.KuntaApiClient = {};
    }
    root.KuntaApiClient.Municipality = factory(root.KuntaApiClient.ApiClient, root.KuntaApiClient.LocalizedValue);
  }
}(this, function(ApiClient, LocalizedValue) {
  'use strict';




  /**
   * The Municipality model module.
   * @module model/Municipality
   * @version 0.0.92
   */

  /**
   * Constructs a new <code>Municipality</code>.
   * @alias module:model/Municipality
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Municipality</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Municipality} obj Optional instance to populate.
   * @return {module:model/Municipality} The populated <code>Municipality</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('names')) {
        obj['names'] = ApiClient.convertToType(data['names'], [LocalizedValue]);
      }
    }
    return obj;
  }

  /**
   * Municipality code (like 491 or 091).
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * @member {Array.<module:model/LocalizedValue>} names
   */
  exports.prototype['names'] = undefined;



  return exports;
}));


