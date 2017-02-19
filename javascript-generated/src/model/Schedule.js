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
    define(['ApiClient', 'model/ScheduleException'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ScheduleException'));
  } else {
    // Browser globals (root is window)
    if (!root.KuntaApiClient) {
      root.KuntaApiClient = {};
    }
    root.KuntaApiClient.Schedule = factory(root.KuntaApiClient.ApiClient, root.KuntaApiClient.ScheduleException);
  }
}(this, function(ApiClient, ScheduleException) {
  'use strict';




  /**
   * The Schedule model module.
   * @module model/Schedule
   * @version 0.0.47
   */

  /**
   * Constructs a new <code>Schedule</code>.
   * @alias module:model/Schedule
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>Schedule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Schedule} obj Optional instance to populate.
   * @return {module:model/Schedule} The populated <code>Schedule</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('days')) {
        obj['days'] = ApiClient.convertToType(data['days'], ['Integer']);
      }
      if (data.hasOwnProperty('exceptions')) {
        obj['exceptions'] = ApiClient.convertToType(data['exceptions'], [ScheduleException]);
      }
      if (data.hasOwnProperty('startDate')) {
        obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
      }
      if (data.hasOwnProperty('endDate')) {
        obj['endDate'] = ApiClient.convertToType(data['endDate'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Array.<Integer>} days
   */
  exports.prototype['days'] = undefined;
  /**
   * @member {Array.<module:model/ScheduleException>} exceptions
   */
  exports.prototype['exceptions'] = undefined;
  /**
   * @member {Date} startDate
   */
  exports.prototype['startDate'] = undefined;
  /**
   * @member {Date} endDate
   */
  exports.prototype['endDate'] = undefined;



  return exports;
}));


