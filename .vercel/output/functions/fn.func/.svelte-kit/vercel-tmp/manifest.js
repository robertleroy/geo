export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.e20abd50.js","app":"_app/immutable/entry/app.47f6400c.js","imports":["_app/immutable/entry/start.e20abd50.js","_app/immutable/chunks/index.764ff3e9.js","_app/immutable/chunks/singletons.6f3fc64a.js","_app/immutable/chunks/index.ee134f59.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.47f6400c.js","_app/immutable/chunks/index.764ff3e9.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/ipapi",
				pattern: /^\/api\/ipapi\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/ipapi/_server.js')
			},
			{
				id: "/api/old_ipData",
				pattern: /^\/api\/old_ipData\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/old_ipData/_server.js')
			},
			{
				id: "/api/reverseGeo",
				pattern: /^\/api\/reverseGeo\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/reverseGeo/_server.js')
			},
			{
				id: "/api/tomtom",
				pattern: /^\/api\/tomtom\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/tomtom/_server.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
