<template>
    <nav>
        <ul class="pagination">
            <li :class="{'disabled':current==1}">
                <a href="" @click="setCurrent(current-1)" target="_blank"> « </a>
            </li>
            <li :class="{'disabled':current==1}">
                <a href="" @click="setCurrent(1)" target="_blank"> 首页 </a>
            </li>
            <li v-for="(p,index) in groupList" :class="{'active': current == p.val}" :key="index" >
                <a href="" @click="setCurrent(p.val)" target="_blank"> {{p.text}} </a>
            </li>
            <li :class="{'disabled':current==page}">
                <a href="" @click="setCurrent(page)" target="_blank"> 尾页 </a>
            </li>
            <li :class="{'disabled':current==page}">
                <a href="" @click="setCurrent(current + 1)" target="_blank"> » </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default{
  data () {
    return {
      current: this.currentPage
    }
  },
  props: {
    total: {
      type: Number,
      default: 150
    },
    pagingVolume: {
      type: Number,
      default: 10
    },
    currentPage: {
      type: Number,
      default: 1
    },
    pageGroup: {
      type: Number,
      default: 5,
      coerce: function (v) {
        v = v > 0 ? v : 5
        return v % 2 === 1 ? v : v + 1
      }
    }
  },
  computed: {
    page: function () {
      return Math.ceil(this.total / this.pagingVolume)
    },
    groupList: function () {
      var len = this.page
      var temp = []
      var list = []
      var count = Math.floor(this.pageGroup / 2)
      var center = this.current
      if (len <= this.pageGroup) {
        while (len--) {
          temp.push({text: this.page - len, val: this.page - len})
        }
        return temp
      }
      while (len--) {
        temp.push(this.page - len)
      }
      var idx = temp.indexOf(center);
      (idx < count) && (center = center + count - idx);
      (this.current > this.page - count) && (center = this.page - count)
      temp = temp.splice(center - count - 1, this.pageGroup)
      do {
        var t = temp.shift()
        list.push({
          text: t,
          val: t
        })
      } while (temp.length)
      if (this.page > this.pageGroup) {
        (this.current > count + 1) && list.unshift({text: '...', val: list[0].val - 1});
        (this.current < this.page - count) && list.push({text: '...', val: list[list.length - 1].val + 1})
      }
      return list
    }
  },
  methods: {
    setCurrent: function (idx) {
      if (this.current !== idx && idx > 0 && idx < this.page + 1) {
        this.current = idx
        this.$emit('pageChange', this.current)
      }
    }
  }
}
</script>

<style>
    .pagination {
        overflow: hidden;
        display: table;
        margin: 0 auto;
        height: 50px;
    }
    .pagination li {
        float: left;
        height: 30px;
        border-radius: 5px;
        margin: 3px;
        color: #666;
        list-style: none;
    }
    .pagination a:hover {
        background: #d2d4d6;
    }
    .pagination a {
        color: #818181;
        display: block;
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        font-size: 14px;
        border-radius: 5px;
        text-decoration: none;
    }
    .pagination .active {
        background: #d2d4d6;
    }
</style>
