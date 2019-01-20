 <template>
           <div class="w_search">
						<div class="w_searchbox">
							<input type="text"  @focus="focusEvent" @input="keyUp" @blur="blurEvent" v-model="inutValue" placeholder="search" />
							<button>搜索</button>
						</div>
                         <transition name="el-zoom-in-top">
                        <ul class="w_search_dropdown" v-show="isShow">
                            <li v-for="item in titleArr" :key="item.id">
                                <router-link :to="item.url"  class="routelink">{{item.name}}</router-link>
                            </li>
                        </ul>
                         </transition>
					</div>
    </template>
    <script>
import SearchBar from '../../util/searchBarHelp.js';
import Leaf from '../../util/searchClass.js';
export default {
	name: 'searchBar',
	data() {
		return {
			inutValue: '',
            isShow: false,
            rootLef: {}, //叶子根节点
             userMap: [],//原数据扁平化处理
			identifyKey: 'id', //每组数据的标志
            titleArr: [],//最终返回的数据
		};
	},
	props: {
		getSearchDate: {
			type: Array,
			required: true,
		},
	},
	mounted: function() {
        //数据扁平化
		this.userMap = this.normalizeDate();
        //构建一棵树 重排数据
		const listJson = this.getSearchDate;
		const identifyKey = this.identifyKey;
		let root = new Leaf();
		listJson.forEach(item => {
			const identifyValue = item[identifyKey];
			Object.keys(item).forEach(ObjKeys => {
				if (ObjKeys == 'name') {
					let tempRoot = root;
                    const arraiedStringifiedValue = Array.from(String(item[ObjKeys]));
                      console.log(arraiedStringifiedValue);
					arraiedStringifiedValue.forEach((character, characterIndex) => {
						const reachEnd = characterIndex === arraiedStringifiedValue.length - 1;
						if (!tempRoot.children[character]) {
							tempRoot.children[character] = new Leaf(reachEnd ? identifyValue : '', character);
							tempRoot = tempRoot.children[character];
						} else {
							if (reachEnd) {
								tempRoot.children[character].share(identifyValue);
							}
							tempRoot = tempRoot.children[character];
						}
					});
				}
			});
        });
        this.rootLef = root;
        console.log(this.userMap,this.rootLef,"扁平化数据，重排数据")
	},
	methods: {
		focusEvent() {
			this.isShow = true;
		},
		blurEvent() {
            let that = this;
            setTimeout(function(){
             that.isShow = false;
            },300)
          
        },
		keyUp() {
            //var userMap = normalize(identifyKey, winJson);
            var arr = this.searchBlurry(this.rootLef, this.inutValue, this.userMap);
            if(arr.length==0){
                this.titleArr=[{
                    "name":"未搜索到数据",
                    "id":"null",
                     "url":""
                }]
                return;
            }
			this.titleArr = arr;
		},
		normalizeDate() {
            console.log(this.identifyKey,this.getSearchDate)
			return SearchBar.normalize(this.identifyKey, this.getSearchDate);
        },
        //搜索算法 root 树节点  keyword要搜索的值   userMap扁平化的数据
		searchBlurry(root2, keyword, userMap) {
			const keywordArr = Array.from(String(keyword));
			let tempRoot = root2;
			let result = [];
			for (let i = 0; i < keywordArr.length; i++) {
				const character = keywordArr[i];
				if (!tempRoot.children[character]) {
					break;
				} else {
					tempRoot = tempRoot.children[character];
				}
				if (keywordArr.length - 1 === i) {
					result = [...tempRoot.ids, ...this.collectChildrenInsideIds(tempRoot.children)];
				}
            }
			return SearchBar.distinct(result).map(id => {
				return userMap[id];
			});
        },
         //收集id
		collectChildrenInsideIds(children) {
			return Object.values(children).reduce((acc, child) => {
				const result = [
					...acc,
					...(child.ids || []),
					...(SearchBar.isEmptyObject(child.children) && child.children
						? []
						: this.collectChildrenInsideIds(child.children)),
				];
				return result;
			}, []);
		},
	},
};
</script>
<style scoped>
.w_search {
	float: right;
	padding-right: 10px;
	padding-left: 10px;
	height: 80px;
}
.w_search .w_searchbox {
	margin-top: 15px;
}
.w_search .w_searchbox > input {
	border: none;
	height: 30px;
	padding: 5px;
	border-radius: 2px;
	font-size: 14px;
	border-top-left-radius: 3px;
	border-bottom-left-radius: 3px;
}
.w_search .w_searchbox > input:focus {
	outline: none;
}
.w_search .w_searchbox > button {
	border: none;
	height: 30px;
	margin-left: -5px;
	background-color: #dedbdb;
	width: 60px;
	font-size: 14px;
	border-top-right-radius: 3px;
	border-bottom-right-radius: 3px;
	vertical-align: top;
}
.w_search_dropdown {
	background: #fff;
	margin-top: 3px;
	border-radius: 4px;
	max-height: 500px;
	padding: 0px 15px 15px 15px;
}
.w_search_dropdown li {
	height: 45px;
	margin-top: 3px;
	border-bottom: 1px solid #e0e0e0;
	color: #999;
	line-height: 45px;
	position: relative;
	padding-left: 23px;
	background: url(/img/sousuo.png) no-repeat left center;
	background-size: 16px;
}
.w_search_dropdown li:hover {
	box-shadow: 2px 2px 2px 2px;
}
.hidden {
	display: none;
}
.routelink{
    display: inline-block;
    width: 100%;
}
</style>