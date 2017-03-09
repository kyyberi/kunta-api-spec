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
    define(['ApiClient', 'model/BadRequest', 'model/Agency', 'model/Forbidden', 'model/InternalServerError', 'model/Route', 'model/Schedule', 'model/Stop', 'model/StopTime', 'model/Trip'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequest'), require('../model/Agency'), require('../model/Forbidden'), require('../model/InternalServerError'), require('../model/Route'), require('../model/Schedule'), require('../model/Stop'), require('../model/StopTime'), require('../model/Trip'));
  } else {
    // Browser globals (root is window)
    if (!root.KuntaApiClient) {
      root.KuntaApiClient = {};
    }
    root.KuntaApiClient.PublicTransportApi = factory(root.KuntaApiClient.ApiClient, root.KuntaApiClient.BadRequest, root.KuntaApiClient.Agency, root.KuntaApiClient.Forbidden, root.KuntaApiClient.InternalServerError, root.KuntaApiClient.Route, root.KuntaApiClient.Schedule, root.KuntaApiClient.Stop, root.KuntaApiClient.StopTime, root.KuntaApiClient.Trip);
  }
}(this, function(ApiClient, BadRequest, Agency, Forbidden, InternalServerError, Route, Schedule, Stop, StopTime, Trip) {
  'use strict';

  /**
   * PublicTransport service.
   * @module api/PublicTransportApi
   * @version 0.0.57
   */

  /**
   * Constructs a new PublicTransportApi. 
   * @alias module:api/PublicTransportApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Finds an organizations public transport agency
     * Finds organization&#39;s single public transport agency 
     * @param {String} organizationId Organization id
     * @param {String} agencyId Agency id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Agency}
     */
    this.findOrganizationPublicTransportAgency = function(organizationId, agencyId) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw "Missing the required parameter 'organizationId' when calling findOrganizationPublicTransportAgency";
      }

      // verify the required parameter 'agencyId' is set
      if (agencyId == undefined || agencyId == null) {
        throw "Missing the required parameter 'agencyId' when calling findOrganizationPublicTransportAgency";
      }


      var pathParams = {
        'organizationId': organizationId,
        'agencyId': agencyId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = Agency;

      return this.apiClient.callApi(
        '/organizations/{organizationId}/transportAgencies/{agencyId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Finds an organizations public transport route
     * Finds organization&#39;s single public transport route 
     * @param {String} organizationId Organization id
     * @param {String} routeId Route id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Route}
     */
    this.findOrganizationPublicTransportRoute = function(organizationId, routeId) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw "Missing the required parameter 'organizationId' when calling findOrganizationPublicTransportRoute";
      }

      // verify the required parameter 'routeId' is set
      if (routeId == undefined || routeId == null) {
        throw "Missing the required parameter 'routeId' when calling findOrganizationPublicTransportRoute";
      }


      var pathParams = {
        'organizationId': organizationId,
        'routeId': routeId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = Route;

      return this.apiClient.callApi(
        '/organizations/{organizationId}/transportRoutes/{routeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Finds organizations public transport schedule
     * Finds organizations public transport schedule 
     * @param {String} organizationId Organization id
     * @param {String} scheduleId Schedule id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Schedule}
     */
    this.findOrganizationPublicTransportSchedule = function(organizationId, scheduleId) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw "Missing the required parameter 'organizationId' when calling findOrganizationPublicTransportSchedule";
      }

      // verify the required parameter 'scheduleId' is set
      if (scheduleId == undefined || scheduleId == null) {
        throw "Missing the required parameter 'scheduleId' when calling findOrganizationPublicTransportSchedule";
      }


      var pathParams = {
        'organizationId': organizationId,
        'scheduleId': scheduleId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = Schedule;

      return this.apiClient.callApi(
        '/organizations/{organizationId}/transportSchedules/{scheduleId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Finds a stop of organizations public transport route
     * Finds a stop of organizations public transport route 
     * @param {String} organizationId Organization id
     * @param {String} stopId Stop id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Stop}
     */
    this.findOrganizationPublicTransportStop = function(organizationId, stopId) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw "Missing the required parameter 'organizationId' when calling findOrganizationPublicTransportStop";
      }

      // verify the required parameter 'stopId' is set
      if (stopId == undefined || stopId == null) {
        throw "Missing the required parameter 'stopId' when calling findOrganizationPublicTransportStop";
      }


      var pathParams = {
        'organizationId': organizationId,
        'stopId': stopId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = Stop;

      return this.apiClient.callApi(
        '/organizations/{organizationId}/transportStops/{stopId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Finds organizations public transport stopTime
     * Finds organizations public transport stopTime 
     * @param {String} organizationId Organization id
     * @param {String} stopTimeId StopTime id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StopTime}
     */
    this.findOrganizationPublicTransportStopTime = function(organizationId, stopTimeId) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw "Missing the required parameter 'organizationId' when calling findOrganizationPublicTransportStopTime";
      }

      // verify the required parameter 'stopTimeId' is set
      if (stopTimeId == undefined || stopTimeId == null) {
        throw "Missing the required parameter 'stopTimeId' when calling findOrganizationPublicTransportStopTime";
      }


      var pathParams = {
        'organizationId': organizationId,
        'stopTimeId': stopTimeId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = StopTime;

      return this.apiClient.callApi(
        '/organizations/{organizationId}/transportStopTimes/{stopTimeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Finds organizations public transport trip
     * Finds organizations public transport trip 
     * @param {String} organizationId Organization id
     * @param {String} tripId Trip id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Trip}
     */
    this.findOrganizationPublicTransportTrip = function(organizationId, tripId) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw "Missing the required parameter 'organizationId' when calling findOrganizationPublicTransportTrip";
      }

      // verify the required parameter 'tripId' is set
      if (tripId == undefined || tripId == null) {
        throw "Missing the required parameter 'tripId' when calling findOrganizationPublicTransportTrip";
      }


      var pathParams = {
        'organizationId': organizationId,
        'tripId': tripId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = Trip;

      return this.apiClient.callApi(
        '/organizations/{organizationId}/transportTrips/{tripId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Lists organizations public transport agencies
     * Lists organizations public transport agencies 
     * @param {String} organizationId Organization id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Agency>}
     */
    this.listOrganizationPublicTransportAgencies = function(organizationId) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw "Missing the required parameter 'organizationId' when calling listOrganizationPublicTransportAgencies";
      }


      var pathParams = {
        'organizationId': organizationId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = [Agency];

      return this.apiClient.callApi(
        '/organizations/{organizationId}/transportAgencies', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Lists organizations public transport routes
     * Lists organizations public transport routes 
     * @param {String} organizationId Organization id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Route>}
     */
    this.listOrganizationPublicTransportRoutes = function(organizationId) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw "Missing the required parameter 'organizationId' when calling listOrganizationPublicTransportRoutes";
      }


      var pathParams = {
        'organizationId': organizationId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = [Route];

      return this.apiClient.callApi(
        '/organizations/{organizationId}/transportRoutes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Lists schedules of organization&#39;s public transport schedules
     * Lists schedules of organization&#39;s public transport schedules 
     * @param {String} organizationId Organization id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Schedule>}
     */
    this.listOrganizationPublicTransportSchedules = function(organizationId) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw "Missing the required parameter 'organizationId' when calling listOrganizationPublicTransportSchedules";
      }


      var pathParams = {
        'organizationId': organizationId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = [Schedule];

      return this.apiClient.callApi(
        '/organizations/{organizationId}/transportSchedules', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Lists stopTimes of organization&#39;s public transport stopTimes
     * Lists stopTimes of organization&#39;s public transport stopTimes 
     * @param {String} organizationId Organization id
     * @param {Object} opts Optional parameters
     * @param {String} opts.stopId Filter stop times by stopId
     * @param {Integer} opts.departureTime Filter stop times that depart in or after specified time. Value is defined in seconds since midnight
     * @param {String} opts.sortBy DEPARTURE_TIME
     * @param {String} opts.sortDir ASC or DESC
     * @param {Integer} opts.firstResult First result
     * @param {Integer} opts.maxResults Max results
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/StopTime>}
     */
    this.listOrganizationPublicTransportStopTimes = function(organizationId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw "Missing the required parameter 'organizationId' when calling listOrganizationPublicTransportStopTimes";
      }


      var pathParams = {
        'organizationId': organizationId
      };
      var queryParams = {
        'stopId': opts['stopId'],
        'departureTime': opts['departureTime'],
        'sortBy': opts['sortBy'],
        'sortDir': opts['sortDir'],
        'firstResult': opts['firstResult'],
        'maxResults': opts['maxResults']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = [StopTime];

      return this.apiClient.callApi(
        '/organizations/{organizationId}/transportStopTimes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Lists organizations public transport stops
     * Lists organizations public transport stops 
     * @param {String} organizationId Organization id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Stop>}
     */
    this.listOrganizationPublicTransportStops = function(organizationId) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw "Missing the required parameter 'organizationId' when calling listOrganizationPublicTransportStops";
      }


      var pathParams = {
        'organizationId': organizationId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = [Stop];

      return this.apiClient.callApi(
        '/organizations/{organizationId}/transportStops', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Lists trips of organization&#39;s public transport trips
     * Lists trips of organization&#39;s public transport trips 
     * @param {String} organizationId Organization id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Trip>}
     */
    this.listOrganizationPublicTransportTrips = function(organizationId) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw "Missing the required parameter 'organizationId' when calling listOrganizationPublicTransportTrips";
      }


      var pathParams = {
        'organizationId': organizationId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = [Trip];

      return this.apiClient.callApi(
        '/organizations/{organizationId}/transportTrips', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
