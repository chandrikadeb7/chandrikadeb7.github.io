import { freezeSys, toPlainObject } from 'contentful-sdk-core';
import copy from 'fast-copy';
import { wrapCollection } from '../common-utils';
import enhanceWithMethods from '../enhance-with-methods';
/**
 * Represents that state of the scheduled action
 */

var ScheduledActionStatus;

(function (ScheduledActionStatus) {
  ScheduledActionStatus["scheduled"] = "scheduled";
  ScheduledActionStatus["inProgress"] = "inProgress";
  ScheduledActionStatus["succeeded"] = "succeeded";
  ScheduledActionStatus["failed"] = "failed";
  ScheduledActionStatus["canceled"] = "canceled";
})(ScheduledActionStatus || (ScheduledActionStatus = {}));

export function createDeleteScheduledAction(makeRequest) {
  return function () {
    var _data$environment;

    var data = this.toPlainObject();
    return makeRequest({
      entityType: 'ScheduledAction',
      action: 'delete',
      params: {
        spaceId: data.sys.space.sys.id,
        scheduledActionId: data.sys.id,
        environmentId: (_data$environment = data.environment) === null || _data$environment === void 0 ? void 0 : _data$environment.sys.id
      }
    }).then(function (data) {
      return wrapScheduledAction(makeRequest, data);
    });
  };
}
export default function createScheduledActionApi(makeRequest) {
  return {
    "delete": createDeleteScheduledAction(makeRequest)
  };
}
export function wrapScheduledAction(makeRequest, data) {
  var scheduledAction = toPlainObject(copy(data));
  var scheduledActionWithMethods = enhanceWithMethods(scheduledAction, createScheduledActionApi(makeRequest));
  return freezeSys(scheduledActionWithMethods);
}
export var wrapScheduledActionCollection = wrapCollection(wrapScheduledAction);