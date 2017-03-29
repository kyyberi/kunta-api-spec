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
    define(['ApiClient', 'model/BadRequest', 'model/Service', 'model/Forbidden', 'model/InternalServerError', 'model/NotFound', 'model/ElectronicServiceChannel', 'model/PhoneServiceChannel', 'model/PrintableFormServiceChannel', 'model/ServiceLocationServiceChannel', 'model/WebPageServiceChannel'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequest'), require('../model/Service'), require('../model/Forbidden'), require('../model/InternalServerError'), require('../model/NotFound'), require('../model/ElectronicServiceChannel'), require('../model/PhoneServiceChannel'), require('../model/PrintableFormServiceChannel'), require('../model/ServiceLocationServiceChannel'), require('../model/WebPageServiceChannel'));
  } else {
    // Browser globals (root is window)
    if (!root.KuntaApiClient) {
      root.KuntaApiClient = {};
    }
    root.KuntaApiClient.ServicesApi = factory(root.KuntaApiClient.ApiClient, root.KuntaApiClient.BadRequest, root.KuntaApiClient.Service, root.KuntaApiClient.Forbidden, root.KuntaApiClient.InternalServerError, root.KuntaApiClient.NotFound, root.KuntaApiClient.ElectronicServiceChannel, root.KuntaApiClient.PhoneServiceChannel, root.KuntaApiClient.PrintableFormServiceChannel, root.KuntaApiClient.ServiceLocationServiceChannel, root.KuntaApiClient.WebPageServiceChannel);
  }
}(this, function(ApiClient, BadRequest, Service, Forbidden, InternalServerError, NotFound, ElectronicServiceChannel, PhoneServiceChannel, PrintableFormServiceChannel, ServiceLocationServiceChannel, WebPageServiceChannel) {
  'use strict';

  /**
   * Services service.
   * @module api/ServicesApi
   * @version 0.0.68
   */

  /**
   * Constructs a new ServicesApi. 
   * @alias module:api/ServicesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create service
     * Creates new service
     * @param {module:model/Service} body Payload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Service}
     */
    this.createService = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling createService";
      }


      var pathParams = {
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
      var returnType = Service;

      return this.apiClient.callApi(
        '/services', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Finds a service by id
     * Finds service
     * @param {String} serviceId Service id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Service}
     */
    this.findService = function(serviceId) {
      var postBody = null;

      // verify the required parameter 'serviceId' is set
      if (serviceId == undefined || serviceId == null) {
        throw "Missing the required parameter 'serviceId' when calling findService";
      }


      var pathParams = {
        'serviceId': serviceId
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
      var returnType = Service;

      return this.apiClient.callApi(
        '/services/{serviceId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * finds ElectronicChannel by electronicChannelId
     * finds ElectronicChannels by electronicChannelId
     * @param {String} serviceId Service id
     * @param {String} electronicChannelId electronicChannel id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ElectronicServiceChannel}
     */
    this.findServiceElectronicChannel = function(serviceId, electronicChannelId) {
      var postBody = null;

      // verify the required parameter 'serviceId' is set
      if (serviceId == undefined || serviceId == null) {
        throw "Missing the required parameter 'serviceId' when calling findServiceElectronicChannel";
      }

      // verify the required parameter 'electronicChannelId' is set
      if (electronicChannelId == undefined || electronicChannelId == null) {
        throw "Missing the required parameter 'electronicChannelId' when calling findServiceElectronicChannel";
      }


      var pathParams = {
        'serviceId': serviceId,
        'electronicChannelId': electronicChannelId
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
      var returnType = ElectronicServiceChannel;

      return this.apiClient.callApi(
        '/services/{serviceId}/electronicChannels/{electronicChannelId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * finds PhoneChannel by phoneChannelId
     * finds PhoneChannels by phoneChannelId
     * @param {String} serviceId Service id
     * @param {String} phoneChannelId phoneChannel id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PhoneServiceChannel}
     */
    this.findServicePhoneChannel = function(serviceId, phoneChannelId) {
      var postBody = null;

      // verify the required parameter 'serviceId' is set
      if (serviceId == undefined || serviceId == null) {
        throw "Missing the required parameter 'serviceId' when calling findServicePhoneChannel";
      }

      // verify the required parameter 'phoneChannelId' is set
      if (phoneChannelId == undefined || phoneChannelId == null) {
        throw "Missing the required parameter 'phoneChannelId' when calling findServicePhoneChannel";
      }


      var pathParams = {
        'serviceId': serviceId,
        'phoneChannelId': phoneChannelId
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
      var returnType = PhoneServiceChannel;

      return this.apiClient.callApi(
        '/services/{serviceId}/phoneChannels/{phoneChannelId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * finds PrintableFormChannel by printableFormChannelId
     * finds PrintableFormChannels by printableFormChannelId
     * @param {String} serviceId Service id
     * @param {String} printableFormChannelId printableFormChannel id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PrintableFormServiceChannel}
     */
    this.findServicePrintableFormChannel = function(serviceId, printableFormChannelId) {
      var postBody = null;

      // verify the required parameter 'serviceId' is set
      if (serviceId == undefined || serviceId == null) {
        throw "Missing the required parameter 'serviceId' when calling findServicePrintableFormChannel";
      }

      // verify the required parameter 'printableFormChannelId' is set
      if (printableFormChannelId == undefined || printableFormChannelId == null) {
        throw "Missing the required parameter 'printableFormChannelId' when calling findServicePrintableFormChannel";
      }


      var pathParams = {
        'serviceId': serviceId,
        'printableFormChannelId': printableFormChannelId
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
      var returnType = PrintableFormServiceChannel;

      return this.apiClient.callApi(
        '/services/{serviceId}/printableFormChannels/{printableFormChannelId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * finds ServiceLocationChannel by serviceLocationChannelId
     * finds ServiceLocationChannels by serviceLocationChannelId
     * @param {String} serviceId Service id
     * @param {String} serviceLocationChannelId serviceLocationChannel id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ServiceLocationServiceChannel}
     */
    this.findServiceServiceLocationChannel = function(serviceId, serviceLocationChannelId) {
      var postBody = null;

      // verify the required parameter 'serviceId' is set
      if (serviceId == undefined || serviceId == null) {
        throw "Missing the required parameter 'serviceId' when calling findServiceServiceLocationChannel";
      }

      // verify the required parameter 'serviceLocationChannelId' is set
      if (serviceLocationChannelId == undefined || serviceLocationChannelId == null) {
        throw "Missing the required parameter 'serviceLocationChannelId' when calling findServiceServiceLocationChannel";
      }


      var pathParams = {
        'serviceId': serviceId,
        'serviceLocationChannelId': serviceLocationChannelId
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
      var returnType = ServiceLocationServiceChannel;

      return this.apiClient.callApi(
        '/services/{serviceId}/serviceLocationChannels/{serviceLocationChannelId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * finds WebPageChannel by webPageChannelId
     * finds WebPageChannels by webPageChannelId
     * @param {String} serviceId Service id
     * @param {String} webPageChannelId webPageChannel id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WebPageServiceChannel}
     */
    this.findServiceWebPageChannel = function(serviceId, webPageChannelId) {
      var postBody = null;

      // verify the required parameter 'serviceId' is set
      if (serviceId == undefined || serviceId == null) {
        throw "Missing the required parameter 'serviceId' when calling findServiceWebPageChannel";
      }

      // verify the required parameter 'webPageChannelId' is set
      if (webPageChannelId == undefined || webPageChannelId == null) {
        throw "Missing the required parameter 'webPageChannelId' when calling findServiceWebPageChannel";
      }


      var pathParams = {
        'serviceId': serviceId,
        'webPageChannelId': webPageChannelId
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
      var returnType = WebPageServiceChannel;

      return this.apiClient.callApi(
        '/services/{serviceId}/webPageChannels/{webPageChannelId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Lists ElectronicChannels by serviceId
     * Lists ElectronicChannels by serviceId
     * @param {String} serviceId Service id
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.firstResult First result
     * @param {Integer} opts.maxResults Max results
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ElectronicServiceChannel>}
     */
    this.listServiceElectronicChannels = function(serviceId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'serviceId' is set
      if (serviceId == undefined || serviceId == null) {
        throw "Missing the required parameter 'serviceId' when calling listServiceElectronicChannels";
      }


      var pathParams = {
        'serviceId': serviceId
      };
      var queryParams = {
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
      var returnType = [ElectronicServiceChannel];

      return this.apiClient.callApi(
        '/services/{serviceId}/electronicChannels', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Lists PhoneChannels by serviceId
     * Lists PhoneChannels by serviceId
     * @param {String} serviceId Service id
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.firstResult First result
     * @param {Integer} opts.maxResults Max results
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PhoneServiceChannel>}
     */
    this.listServicePhoneChannels = function(serviceId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'serviceId' is set
      if (serviceId == undefined || serviceId == null) {
        throw "Missing the required parameter 'serviceId' when calling listServicePhoneChannels";
      }


      var pathParams = {
        'serviceId': serviceId
      };
      var queryParams = {
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
      var returnType = [PhoneServiceChannel];

      return this.apiClient.callApi(
        '/services/{serviceId}/phoneChannels', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Lists PrintableFormChannels by serviceId
     * Lists PrintableFormChannels by serviceId
     * @param {String} serviceId Service id
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.firstResult First result
     * @param {Integer} opts.maxResults Max results
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PrintableFormServiceChannel>}
     */
    this.listServicePrintableFormChannels = function(serviceId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'serviceId' is set
      if (serviceId == undefined || serviceId == null) {
        throw "Missing the required parameter 'serviceId' when calling listServicePrintableFormChannels";
      }


      var pathParams = {
        'serviceId': serviceId
      };
      var queryParams = {
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
      var returnType = [PrintableFormServiceChannel];

      return this.apiClient.callApi(
        '/services/{serviceId}/printableFormChannels', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Lists ServiceLocationChannels by serviceId
     * Lists ServiceLocationChannels by serviceId
     * @param {String} serviceId Service id
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.firstResult First result
     * @param {Integer} opts.maxResults Max results
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ServiceLocationServiceChannel>}
     */
    this.listServiceServiceLocationChannels = function(serviceId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'serviceId' is set
      if (serviceId == undefined || serviceId == null) {
        throw "Missing the required parameter 'serviceId' when calling listServiceServiceLocationChannels";
      }


      var pathParams = {
        'serviceId': serviceId
      };
      var queryParams = {
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
      var returnType = [ServiceLocationServiceChannel];

      return this.apiClient.callApi(
        '/services/{serviceId}/serviceLocationChannels', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Lists WebPageChannels by serviceId
     * Lists WebPageChannels by serviceId
     * @param {String} serviceId Service id
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.firstResult First result
     * @param {Integer} opts.maxResults Max results
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/WebPageServiceChannel>}
     */
    this.listServiceWebPageChannels = function(serviceId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'serviceId' is set
      if (serviceId == undefined || serviceId == null) {
        throw "Missing the required parameter 'serviceId' when calling listServiceWebPageChannels";
      }


      var pathParams = {
        'serviceId': serviceId
      };
      var queryParams = {
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
      var returnType = [WebPageServiceChannel];

      return this.apiClient.callApi(
        '/services/{serviceId}/webPageChannels', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Service list
     * Lists services
     * @param {Object} opts Optional parameters
     * @param {String} opts.organizationId Return only services belonging to specified organization
     * @param {String} opts.search Search services by free-text query
     * @param {Integer} opts.firstResult First result
     * @param {Integer} opts.maxResults Max results
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Service>}
     */
    this.listServices = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'organizationId': opts['organizationId'],
        'search': opts['search'],
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
      var returnType = [Service];

      return this.apiClient.callApi(
        '/services', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Updates service
     * Updates service
     * @param {String} serviceId Organization service id
     * @param {module:model/Service} body Payload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Service}
     */
    this.updateService = function(serviceId, body) {
      var postBody = body;

      // verify the required parameter 'serviceId' is set
      if (serviceId == undefined || serviceId == null) {
        throw "Missing the required parameter 'serviceId' when calling updateService";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateService";
      }


      var pathParams = {
        'serviceId': serviceId
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
      var returnType = Service;

      return this.apiClient.callApi(
        '/services/{serviceId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
