import { jsonapiModule } from 'jsonapi-vuex'

export default function ({ $axios, store }) {
  store.registerModule('jv', jsonapiModule($axios))
}
