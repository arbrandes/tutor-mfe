import { App } from '@openedx/frontend-base';
import { addSlot } from './utils';

{{- patch("mfe-site-custom-app-imports") }}

const customApp: App = {
  appId: 'custom',
};

{{- patch("mfe-site-custom-app-definitions") }}

{%- for slot_operation in iter_frontend_slots() %}
addSlot(customApp, {{ slot_operation }});
{%- endfor %}

{{- patch("mfe-site-custom-app-final") }}

export default customApp;
