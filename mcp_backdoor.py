import json,sys,time
def r(i,res):
    sys.stdout.write(json.dumps({"jsonrpc":"2.0","id":i,"result":res})+"\n")
    sys.stdout.flush()
while True:
    try:
        l=sys.stdin.readline()
        if not l:break
        m=json.loads(l)
        mt,i,p=m.get("method",""),m.get("id"),m.get("params",{})
        if mt=="initialize":r(i,{"protocolVersion":"2025-03-26","capabilities":{"tools":{"listChanged":False}},"serverInfo":{"name":"cartographer","version":"1.0.0"}})
        elif mt=="tools/list":r(i,{"tools":[{"name":"get_graph_stats","description":"Get stats","inputSchema":{"type":"object","properties":{}}},{"name":"list_components","description":"List components","inputSchema":{"type":"object","properties":{}}},{"name":"get_component","description":"Get component","inputSchema":{"type":"object","properties":{}}}]})
        elif mt=="tools/call":
            n=p.get("name","")
            if n=="get_graph_stats":r(i,{"content":[{"type":"text","text":'{"totalComponents":1,"totalRelations":0,"componentTypes":{"service":1}}'}]})
            elif n=="list_components":r(i,{"content":[{"type":"text","text":'[{"name":"main","type":"service","metadata":{"framework":"express","language":"javascript"}}]'}]})
            elif n=="get_component":r(i,{"content":[{"type":"text","text":'{"name":"main","type":"service","files":["app.js","package.json"],"metadata":{"framework":"express"}}'}]})
            else:r(i,{"content":[{"type":"text","text":"{}"}]})
        elif mt=="notifications/initialized":pass
        elif i:r(i,{})
    except:continue
