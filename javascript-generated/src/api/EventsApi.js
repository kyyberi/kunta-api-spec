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
    define(['ApiClient', 'model/BadRequest', 'model/Event', 'model/Forbidden', 'model/InternalServerError', 'model/Attachment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequest'), require('../model/Event'), require('../model/Forbidden'), require('../model/InternalServerError'), require('../model/Attachment'));
  } else {
    // Browser globals (root is window)
    if (!root.KuntaApiClient) {
      root.KuntaApiClient = {};
    }
    root.KuntaApiClient.EventsApi = factory(root.KuntaApiClient.ApiClient, root.KuntaApiClient.BadRequest, root.KuntaApiClient.Event, root.KuntaApiClient.Forbidden, root.KuntaApiClient.InternalServerError, root.KuntaApiClient.Attachment);
  }
}(this, function(ApiClient, BadRequest, Event, Forbidden, InternalServerError, Attachment) {
  'use strict';

  /**
   * Events service.
   * @module api/EventsApi
   * @version 0.0.103
   */

  /**
   * Constructs a new EventsApi. 
   * @alias module:api/EventsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Returns organizations event by id
     * Returns organizations event by id 
     * @param {String} organizationId Organization id
     * @param {String} eventId Event id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Event}
     */
    this.findOrganizationEvent = function(organizationId, eventId) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw "Missing the required parameter 'organizationId' when calling findOrganizationEvent";
      }

      // verify the required parameter 'eventId' is set
      if (eventId == undefined || eventId == null) {
        throw "Missing the required parameter 'eventId' when calling findOrganizationEvent";
      }


      var pathParams = {
        'organizationId': organizationId,
        'eventId': eventId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = Event;

      return this.apiClient.callApi(
        '/organizations/{organizationId}/events/{eventId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Returns an event image
     * Returns an event image  
     * @param {String} organizationId Organization id
     * @param {String} eventId Event id
     * @param {String} imageId Event image id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Attachment}
     */
    this.findOrganizationEventImage = function(organizationId, eventId, imageId) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw "Missing the required parameter 'organizationId' when calling findOrganizationEventImage";
      }

      // verify the required parameter 'eventId' is set
      if (eventId == undefined || eventId == null) {
        throw "Missing the required parameter 'eventId' when calling findOrganizationEventImage";
      }

      // verify the required parameter 'imageId' is set
      if (imageId == undefined || imageId == null) {
        throw "Missing the required parameter 'imageId' when calling findOrganizationEventImage";
      }


      var pathParams = {
        'organizationId': organizationId,
        'eventId': eventId,
        'imageId': imageId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = Attachment;

      return this.apiClient.callApi(
        '/organizations/{organizationId}/events/{eventId}/images/{imageId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Returns an event image data
     * Returns an event image data 
     * @param {String} organizationId Organization id
     * @param {String} eventId Event id
     * @param {String} imageId Event image id
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.size Maximum width or height of image
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'String'}
     */
    this.getOrganizationEventImageData = function(organizationId, eventId, imageId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw "Missing the required parameter 'organizationId' when calling getOrganizationEventImageData";
      }

      // verify the required parameter 'eventId' is set
      if (eventId == undefined || eventId == null) {
        throw "Missing the required parameter 'eventId' when calling getOrganizationEventImageData";
      }

      // verify the required parameter 'imageId' is set
      if (imageId == undefined || imageId == null) {
        throw "Missing the required parameter 'imageId' when calling getOrganizationEventImageData";
      }


      var pathParams = {
        'organizationId': organizationId,
        'eventId': eventId,
        'imageId': imageId
      };
      var queryParams = {
        'size': opts['size']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/octet-stream'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/organizations/{organizationId}/events/{eventId}/images/{imageId}/data', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Returns list of event images
     * Returns list of event images 
     * @param {String} organizationId Organization id
     * @param {String} eventId Event id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Attachment>}
     */
    this.listOrganizationEventImages = function(organizationId, eventId) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw "Missing the required parameter 'organizationId' when calling listOrganizationEventImages";
      }

      // verify the required parameter 'eventId' is set
      if (eventId == undefined || eventId == null) {
        throw "Missing the required parameter 'eventId' when calling listOrganizationEventImages";
      }


      var pathParams = {
        'organizationId': organizationId,
        'eventId': eventId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = [Attachment];

      return this.apiClient.callApi(
        '/organizations/{organizationId}/events/{eventId}/images', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Lists organizations events
     * Lists organizations events 
     * @param {String} organizationId Organization id
     * @param {Object} opts Optional parameters
     * @param {String} opts.startBefore return only events starting before the date
     * @param {String} opts.startAfter return only events starting after the date
     * @param {String} opts.endBefore return only events ending before the date
     * @param {String} opts.endAfter return only events ending after the date
     * @param {Integer} opts.firstResult first index of results
     * @param {Integer} opts.maxResults maximum number of results
     * @param {String} opts.orderBy define order (startDate, endDate). Default is startDate
     * @param {String} opts.orderDir ascending, descending. Default is ascending
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Event>}
     */
    this.listOrganizationEvents = function(organizationId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw "Missing the required parameter 'organizationId' when calling listOrganizationEvents";
      }


      var pathParams = {
        'organizationId': organizationId
      };
      var queryParams = {
        'startBefore': opts['startBefore'],
        'startAfter': opts['startAfter'],
        'endBefore': opts['endBefore'],
        'endAfter': opts['endAfter'],
        'firstResult': opts['firstResult'],
        'maxResults': opts['maxResults'],
        'orderBy': opts['orderBy'],
        'orderDir': opts['orderDir']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = [Event];

      return this.apiClient.callApi(
        '/organizations/{organizationId}/events', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
