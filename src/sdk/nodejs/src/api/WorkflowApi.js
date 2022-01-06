/*
 * self-managed-osdu
 * Rest API Documentation for Self Managed OSDU
 *
 * OpenAPI spec version: 0.11.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.22
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Workflow', 'model/WorkflowError', 'model/WorkflowRun', 'model/WorkflowTriggerRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Workflow'), require('../model/WorkflowError'), require('../model/WorkflowRun'), require('../model/WorkflowTriggerRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.SelfManagedOsdu) {
      root.SelfManagedOsdu = {};
    }
    root.SelfManagedOsdu.WorkflowApi = factory(root.SelfManagedOsdu.ApiClient, root.SelfManagedOsdu.Workflow, root.SelfManagedOsdu.WorkflowError, root.SelfManagedOsdu.WorkflowRun, root.SelfManagedOsdu.WorkflowTriggerRequest);
  }
}(this, function(ApiClient, Workflow, WorkflowError, WorkflowRun, WorkflowTriggerRequest) {
  'use strict';

  /**
   * Workflow service.
   * @module api/WorkflowApi
   * @version 0.11.0
   */

  /**
   * Constructs a new WorkflowApi. 
   * @alias module:api/WorkflowApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteWorkflow operation.
     * @callback module:api/WorkflowApi~deleteWorkflowCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a workflow defintion.
     * Delete a workflow by it's name.
     * @param {String} workflowName Unique Name of the Workflow to be deleted.
     * @param {module:api/WorkflowApi~deleteWorkflowCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteWorkflow = function(workflowName, callback) {
      var postBody = null;

      // verify the required parameter 'workflowName' is set
      if (workflowName === undefined || workflowName === null) {
        throw new Error("Missing the required parameter 'workflowName' when calling deleteWorkflow");
      }


      var pathParams = {
        'workflow_name': workflowName
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/workflow/v1/workflow/{workflow_name}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deployWorkflow operation.
     * @callback module:api/WorkflowApi~deployWorkflowCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Workflow} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates workflow definition with standard orchestrator operators.
     * API to create a new workflow using standard operators of orchestrator.
     * @param {Object} opts Optional parameters
     * @param {module:model/Workflow} opts.body Request payload for deploying new workflow.
     * @param {module:api/WorkflowApi~deployWorkflowCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Workflow}
     */
    this.deployWorkflow = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Workflow;

      return this.apiClient.callApi(
        '/api/workflow/v1/workflow', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllWorkflowRuns operation.
     * @callback module:api/WorkflowApi~getAllWorkflowRunsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/WorkflowRun>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all run instances of a workflow.
     * Get all run instances for a worflow.
     * @param {String} workflowName Unique Name of the Workflow for which the execution details has to be fetched.
     * @param {Object} opts Optional parameters
     * @param {String} opts.prefix A prefix used when generating the runId of the workflow run. Prefix cannot contain the word \"backfill\"
     * @param {String} opts.startDate The start date where this call should start creating workflow runs from (inclusive)
     * @param {Boolean} opts.endDate The end date where this call should stop creating workflow runs at (inclusive)
     * @param {Number} opts.limit The maximum number of workflow runs to create in a single request. Maximum is 500.
     * @param {String} opts.cursor Cursor for subsequent request.
     * @param {Boolean} opts.partial Whether or not a partial batch can be created. If true, and the number of workflow runs that would be created between the start and end exceeds the limit, no workflow runs will be created.
     * @param {String} opts.conf JSON configuration added to the Workflow run conf attribute
     * @param {module:api/WorkflowApi~getAllWorkflowRunsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/WorkflowRun>}
     */
    this.getAllWorkflowRuns = function(workflowName, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'workflowName' is set
      if (workflowName === undefined || workflowName === null) {
        throw new Error("Missing the required parameter 'workflowName' when calling getAllWorkflowRuns");
      }


      var pathParams = {
        'workflow_name': workflowName
      };
      var queryParams = {
        'prefix': opts['prefix'],
        'startDate': opts['startDate'],
        'endDate': opts['endDate'],
        'limit': opts['limit'],
        'cursor': opts['cursor'],
        'partial': opts['partial'],
        'conf': opts['conf'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [WorkflowRun];

      return this.apiClient.callApi(
        '/api/workflow/v1/workflow/{workflow_name}/workflowRun', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWorkflowRun operation.
     * @callback module:api/WorkflowApi~getWorkflowRunCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkflowRun} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get details for a speciffic workflow run instance.
     * Get an execution instances for a workflow.
     * @param {String} workflowName Unique Name of Workflow.
     * @param {String} runId Run id for the worfkow.
     * @param {module:api/WorkflowApi~getWorkflowRunCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WorkflowRun}
     */
    this.getWorkflowRun = function(workflowName, runId, callback) {
      var postBody = null;

      // verify the required parameter 'workflowName' is set
      if (workflowName === undefined || workflowName === null) {
        throw new Error("Missing the required parameter 'workflowName' when calling getWorkflowRun");
      }

      // verify the required parameter 'runId' is set
      if (runId === undefined || runId === null) {
        throw new Error("Missing the required parameter 'runId' when calling getWorkflowRun");
      }


      var pathParams = {
        'workflow_name': workflowName,
        'runId': runId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = [];
      var returnType = WorkflowRun;

      return this.apiClient.callApi(
        '/api/workflow/v1/workflow/{workflow_name}/workflowRun/{runId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listAllWorkflow operation.
     * @callback module:api/WorkflowApi~listAllWorkflowCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Workflow>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all the workflow applicable for a tenant.
     * List all the workflows for the tenant.
     * @param {Object} opts Optional parameters
     * @param {String} opts.prefix Filter workflow names which start with  the full prefix specified.
     * @param {module:api/WorkflowApi~listAllWorkflowCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Workflow>}
     */
    this.listAllWorkflow = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'prefix': opts['prefix'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Workflow];

      return this.apiClient.callApi(
        '/api/workflow/v1/workflow', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the triggerWorkflow operation.
     * @callback module:api/WorkflowApi~triggerWorkflowCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkflowRun} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Trigger a workflow.
     * Trigger a workflow mentioned in payload.
     * @param {String} workflowName Unique Name of the Workflow to run.
     * @param {Object} opts Optional parameters
     * @param {module:model/WorkflowTriggerRequest} opts.body 
     * @param {module:api/WorkflowApi~triggerWorkflowCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WorkflowRun}
     */
    this.triggerWorkflow = function(workflowName, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'workflowName' is set
      if (workflowName === undefined || workflowName === null) {
        throw new Error("Missing the required parameter 'workflowName' when calling triggerWorkflow");
      }


      var pathParams = {
        'workflow_name': workflowName
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = WorkflowRun;

      return this.apiClient.callApi(
        '/api/workflow/v1/workflow/{workflow_name}/workflowRun', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateWorkflowRun operation.
     * @callback module:api/WorkflowApi~updateWorkflowRunCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Workflow} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the workflow run instance.
     * Update workflow run.
     * @param {String} workflowName Unique Name of Workflow.
     * @param {String} runId Run id for the worfkow.
     * @param {Object} opts Optional parameters
     * @param {module:model/WorkflowRun} opts.body 
     * @param {module:api/WorkflowApi~updateWorkflowRunCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Workflow}
     */
    this.updateWorkflowRun = function(workflowName, runId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'workflowName' is set
      if (workflowName === undefined || workflowName === null) {
        throw new Error("Missing the required parameter 'workflowName' when calling updateWorkflowRun");
      }

      // verify the required parameter 'runId' is set
      if (runId === undefined || runId === null) {
        throw new Error("Missing the required parameter 'runId' when calling updateWorkflowRun");
      }


      var pathParams = {
        'workflow_name': workflowName,
        'runId': runId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = [];
      var returnType = Workflow;

      return this.apiClient.callApi(
        '/api/workflow/v1/workflow/{workflow_name}/workflowRun/{runId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the viewWorkflow operation.
     * @callback module:api/WorkflowApi~viewWorkflowCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Workflow} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get complete details for a workflow.
     * Get complete details for an workflow.
     * @param {String} workflowName Name of the Workflow.
     * @param {module:api/WorkflowApi~viewWorkflowCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Workflow}
     */
    this.viewWorkflow = function(workflowName, callback) {
      var postBody = null;

      // verify the required parameter 'workflowName' is set
      if (workflowName === undefined || workflowName === null) {
        throw new Error("Missing the required parameter 'workflowName' when calling viewWorkflow");
      }


      var pathParams = {
        'workflow_name': workflowName
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Workflow;

      return this.apiClient.callApi(
        '/api/workflow/v1/workflow/{workflow_name}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
