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
    define(['ApiClient', 'model/BadRequest', 'model/Service', 'model/Forbidden', 'model/InternalServerError', 'model/ElectronicChannel', 'model/NotFound', 'model/PhoneChannel', 'model/PrintableFormChannel', 'model/ServiceLocationChannel', 'model/WebPageChannel'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequest'), require('../model/Service'), require('../model/Forbidden'), require('../model/InternalServerError'), require('../model/ElectronicChannel'), require('../model/NotFound'), require('../model/PhoneChannel'), require('../model/PrintableFormChannel'), require('../model/ServiceLocationChannel'), require('../model/WebPageChannel'));
  } else {
    // Browser globals (root is window)
    if (!root.KuntaApiClient) {
      root.KuntaApiClient = {};
    }
    root.KuntaApiClient.ServicesApi = factory(root.KuntaApiClient.ApiClient, root.KuntaApiClient.BadRequest, root.KuntaApiClient.Service, root.KuntaApiClient.Forbidden, root.KuntaApiClient.InternalServerError, root.KuntaApiClient.ElectronicChannel, root.KuntaApiClient.NotFound, root.KuntaApiClient.PhoneChannel, root.KuntaApiClient.PrintableFormChannel, root.KuntaApiClient.ServiceLocationChannel, root.KuntaApiClient.WebPageChannel);
  }
}(this, function(ApiClient, BadRequest, Service, Forbidden, InternalServerError, ElectronicChannel, NotFound, PhoneChannel, PrintableFormChannel, ServiceLocationChannel, WebPageChannel) {
  'use strict';

  /**
   * Services service.
   * @module api/ServicesApi
   * @version 0.0.48
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
     * creates ElectronicChannel
     * creates ElectronicChannel
     * @param {String} serviceId service id
     * @param {module:model/ElectronicChannel} body Payload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ElectronicChannel}
     */
    this.createServiceElectronicChannel = function(serviceId, body) {
      var postBody = body;

      // verify the required parameter 'serviceId' is set
      if (serviceId == undefined || serviceId == null) {
        throw "Missing the required parameter 'serviceId' when calling createServiceElectronicChannel";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling createServiceElectronicChannel";
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
      var returnType = ElectronicChannel;

      return this.apiClient.callApi(
        '/services/{serviceId}/electronicChannels', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * creates PhoneChannel
     * creates PhoneChannel
     * @param {String} serviceId service id
     * @param {module:model/PhoneChannel} body Payload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PhoneChannel}
     */
    this.createServicePhoneChannel = function(serviceId, body) {
      var postBody = body;

      // verify the required parameter 'serviceId' is set
      if (serviceId == undefined || serviceId == null) {
        throw "Missing the required parameter 'serviceId' when calling createServicePhoneChannel";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling createServicePhoneChannel";
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
      var returnType = PhoneChannel;

      return this.apiClient.callApi(
        '/services/{serviceId}/phoneChannels', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * creates PrintableFormChannel
     * creates PrintableFormChannel
     * @param {String} serviceId service id
     * @param {module:model/PrintableFormChannel} body Payload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PrintableFormChannel}
     */
    this.createServicePrintableFormChannel = function(serviceId, body) {
      var postBody = body;

      // verify the required parameter 'serviceId' is set
      if (serviceId == undefined || serviceId == null) {
        throw "Missing the required parameter 'serviceId' when calling createServicePrintableFormChannel";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling createServicePrintableFormChannel";
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
      var returnType = PrintableFormChannel;

      return this.apiClient.callApi(
        '/services/{serviceId}/printableFormChannels', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * creates ServiceLocationChannel
     * creates ServiceLocationChannel
     * @param {String} serviceId service id
     * @param {module:model/ServiceLocationChannel} body Payload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ServiceLocationChannel}
     */
    this.createServiceServiceLocationChannel = function(serviceId, body) {
      var postBody = body;

      // verify the required parameter 'serviceId' is set
      if (serviceId == undefined || serviceId == null) {
        throw "Missing the required parameter 'serviceId' when calling createServiceServiceLocationChannel";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling createServiceServiceLocationChannel";
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
      var returnType = ServiceLocationChannel;

      return this.apiClient.callApi(
        '/services/{serviceId}/serviceLocationChannels', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * creates WebPageChannel
     * creates WebPageChannel
     * @param {String} serviceId service id
     * @param {module:model/WebPageChannel} body Payload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WebPageChannel}
     */
    this.createServiceWebPageChannel = function(serviceId, body) {
      var postBody = body;

      // verify the required parameter 'serviceId' is set
      if (serviceId == undefined || serviceId == null) {
        throw "Missing the required parameter 'serviceId' when calling createServiceWebPageChannel";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling createServiceWebPageChannel";
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
      var returnType = WebPageChannel;

      return this.apiClient.callApi(
        '/services/{serviceId}/webPageChannels', 'POST',
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ElectronicChannel}
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
      var returnType = ElectronicChannel;

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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PhoneChannel}
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
      var returnType = PhoneChannel;

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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PrintableFormChannel}
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
      var returnType = PrintableFormChannel;

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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ServiceLocationChannel}
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
      var returnType = ServiceLocationChannel;

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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WebPageChannel}
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
      var returnType = WebPageChannel;

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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ElectronicChannel>}
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
      var returnType = [ElectronicChannel];

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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PhoneChannel>}
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
      var returnType = [PhoneChannel];

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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PrintableFormChannel>}
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
      var returnType = [PrintableFormChannel];

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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ServiceLocationChannel>}
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
      var returnType = [ServiceLocationChannel];

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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/WebPageChannel>}
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
      var returnType = [WebPageChannel];

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
     * Updates PhoneChannel
     * Updates PhoneChannel
     * @param {String} serviceId service id
     * @param {String} phoneChannelId phoneChannel id
     * @param {module:model/PhoneChannel} body Payload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PhoneChannel}
     */
    this.updatePhoneChannel = function(serviceId, phoneChannelId, body) {
      var postBody = body;

      // verify the required parameter 'serviceId' is set
      if (serviceId == undefined || serviceId == null) {
        throw "Missing the required parameter 'serviceId' when calling updatePhoneChannel";
      }

      // verify the required parameter 'phoneChannelId' is set
      if (phoneChannelId == undefined || phoneChannelId == null) {
        throw "Missing the required parameter 'phoneChannelId' when calling updatePhoneChannel";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updatePhoneChannel";
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
      var returnType = PhoneChannel;

      return this.apiClient.callApi(
        '/services/{serviceId}/phoneChannels/{phoneChannelId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Updates PrintableFormChannel
     * Updates PrintableFormChannel
     * @param {String} serviceId service id
     * @param {String} printableFormChannelId printableFormChannel id
     * @param {module:model/PrintableFormChannel} body Payload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PrintableFormChannel}
     */
    this.updatePrintableFormChannel = function(serviceId, printableFormChannelId, body) {
      var postBody = body;

      // verify the required parameter 'serviceId' is set
      if (serviceId == undefined || serviceId == null) {
        throw "Missing the required parameter 'serviceId' when calling updatePrintableFormChannel";
      }

      // verify the required parameter 'printableFormChannelId' is set
      if (printableFormChannelId == undefined || printableFormChannelId == null) {
        throw "Missing the required parameter 'printableFormChannelId' when calling updatePrintableFormChannel";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updatePrintableFormChannel";
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
      var returnType = PrintableFormChannel;

      return this.apiClient.callApi(
        '/services/{serviceId}/printableFormChannels/{printableFormChannelId}', 'PUT',
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


    /**
     * Updates ElectronicChannel
     * Updates ElectronicChannel
     * @param {String} serviceId service id
     * @param {String} electronicChannelId electronicChannel id
     * @param {module:model/ElectronicChannel} body Payload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ElectronicChannel}
     */
    this.updateServiceElectronicChannel = function(serviceId, electronicChannelId, body) {
      var postBody = body;

      // verify the required parameter 'serviceId' is set
      if (serviceId == undefined || serviceId == null) {
        throw "Missing the required parameter 'serviceId' when calling updateServiceElectronicChannel";
      }

      // verify the required parameter 'electronicChannelId' is set
      if (electronicChannelId == undefined || electronicChannelId == null) {
        throw "Missing the required parameter 'electronicChannelId' when calling updateServiceElectronicChannel";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateServiceElectronicChannel";
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
      var returnType = ElectronicChannel;

      return this.apiClient.callApi(
        '/services/{serviceId}/electronicChannels/{electronicChannelId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Updates ServiceLocationChannel
     * Updates ServiceLocationChannel
     * @param {String} serviceId service id
     * @param {String} serviceLocationChannelId serviceLocationChannel id
     * @param {module:model/ServiceLocationChannel} body Payload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ServiceLocationChannel}
     */
    this.updateServiceLocationChannel = function(serviceId, serviceLocationChannelId, body) {
      var postBody = body;

      // verify the required parameter 'serviceId' is set
      if (serviceId == undefined || serviceId == null) {
        throw "Missing the required parameter 'serviceId' when calling updateServiceLocationChannel";
      }

      // verify the required parameter 'serviceLocationChannelId' is set
      if (serviceLocationChannelId == undefined || serviceLocationChannelId == null) {
        throw "Missing the required parameter 'serviceLocationChannelId' when calling updateServiceLocationChannel";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateServiceLocationChannel";
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
      var returnType = ServiceLocationChannel;

      return this.apiClient.callApi(
        '/services/{serviceId}/serviceLocationChannels/{serviceLocationChannelId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Updates WebPageChannel
     * Updates WebPageChannel
     * @param {String} serviceId service id
     * @param {String} webPageChannelId webPageChannel id
     * @param {module:model/WebPageChannel} body Payload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WebPageChannel}
     */
    this.updateWebPageChannel = function(serviceId, webPageChannelId, body) {
      var postBody = body;

      // verify the required parameter 'serviceId' is set
      if (serviceId == undefined || serviceId == null) {
        throw "Missing the required parameter 'serviceId' when calling updateWebPageChannel";
      }

      // verify the required parameter 'webPageChannelId' is set
      if (webPageChannelId == undefined || webPageChannelId == null) {
        throw "Missing the required parameter 'webPageChannelId' when calling updateWebPageChannel";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updateWebPageChannel";
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
      var returnType = WebPageChannel;

      return this.apiClient.callApi(
        '/services/{serviceId}/webPageChannels/{webPageChannelId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
