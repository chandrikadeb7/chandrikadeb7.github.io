import * as raw from './raw';
import { normalizeSelect } from './utils';
export var getMany = function getMany(http, params) {
  return raw.get(http, "/spaces/".concat(params.spaceId, "/scheduled_actions"), {
    params: normalizeSelect(params.query)
  });
};
export var create = function create(http, params, data) {
  return raw.post(http, "/spaces/".concat(params.spaceId, "/scheduled_actions"), data);
};
export var del = function del(http, params) {
  return raw.del(http, "/spaces/".concat(params.spaceId, "/scheduled_actions/").concat(params.scheduledActionId), {
    params: {
      'environment.sys.id': params.environmentId
    }
  });
};