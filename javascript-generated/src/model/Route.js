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
    root.KuntaApiClient.Route = factory(root.KuntaApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Route model module.
   * @module model/Route
   * @version 0.0.95
   */

  /**
   * Constructs a new <code>Route</code>.
   * @alias module:model/Route
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Route</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Route} obj Optional instance to populate.
   * @return {module:model/Route} The populated <code>Route</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('agencyId')) {
        obj['agencyId'] = ApiClient.convertToType(data['agencyId'], 'String');
      }
      if (data.hasOwnProperty('shortName')) {
        obj['shortName'] = ApiClient.convertToType(data['shortName'], 'String');
      }
      if (data.hasOwnProperty('longName')) {
        obj['longName'] = ApiClient.convertToType(data['longName'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} agencyId
   */
  exports.prototype['agencyId'] = undefined;
  /**
   * @member {String} shortName
   */
  exports.prototype['shortName'] = undefined;
  /**
   * @member {String} longName
   */
  exports.prototype['longName'] = undefined;



  return exports;
}));


