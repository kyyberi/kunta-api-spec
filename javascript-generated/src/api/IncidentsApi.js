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
    define(['ApiClient', 'model/BadRequest', 'model/Forbidden', 'model/Incident', 'model/InternalServerError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequest'), require('../model/Forbidden'), require('../model/Incident'), require('../model/InternalServerError'));
  } else {
    // Browser globals (root is window)
    if (!root.KuntaApiClient) {
      root.KuntaApiClient = {};
    }
    root.KuntaApiClient.IncidentsApi = factory(root.KuntaApiClient.ApiClient, root.KuntaApiClient.BadRequest, root.KuntaApiClient.Forbidden, root.KuntaApiClient.Incident, root.KuntaApiClient.InternalServerError);
  }
}(this, function(ApiClient, BadRequest, Forbidden, Incident, InternalServerError) {
  'use strict';

  /**
   * Incidents service.
   * @module api/IncidentsApi
   * @version 0.0.111
   */

  /**
   * Constructs a new IncidentsApi. 
   * @alias module:api/IncidentsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Returns organizations incident by id
     * Returns organizations incident by id 
     * @param {String} organizationId Organization id
     * @param {String} incidentId Incident id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Incident}
     */
    this.findOrganizationIncident = function(organizationId, incidentId) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw "Missing the required parameter 'organizationId' when calling findOrganizationIncident";
      }

      // verify the required parameter 'incidentId' is set
      if (incidentId == undefined || incidentId == null) {
        throw "Missing the required parameter 'incidentId' when calling findOrganizationIncident";
      }


      var pathParams = {
        'organizationId': organizationId,
        'incidentId': incidentId
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
      var returnType = Incident;

      return this.apiClient.callApi(
        '/organizations/{organizationId}/incidents/{incidentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Lists organizations incidents
     * Lists organizations incidents 
     * @param {String} organizationId Organization id
     * @param {Object} opts Optional parameters
     * @param {String} opts.slug Filter with slug
     * @param {String} opts.startBefore 
     * @param {String} opts.endAfter 
     * @param {Integer} opts.area Return only incidents from specified area
     * @param {Integer} opts.firstResult First index of results
     * @param {Integer} opts.maxResults Maximum number of results
     * @param {String} opts.orderBy Define order (start, end)
     * @param {String} opts.orderDir Order direction (ASC, DESC). Default is ASC
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Incident>}
     */
    this.listOrganizationIncidents = function(organizationId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw "Missing the required parameter 'organizationId' when calling listOrganizationIncidents";
      }


      var pathParams = {
        'organizationId': organizationId
      };
      var queryParams = {
        'slug': opts['slug'],
        'startBefore': opts['startBefore'],
        'endAfter': opts['endAfter'],
        'area': opts['area'],
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
      var returnType = [Incident];

      return this.apiClient.callApi(
        '/organizations/{organizationId}/incidents', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
