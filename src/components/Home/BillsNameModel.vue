<template>
<div>
    <el-dialog
    title="Create New Bills"
    :visible.sync="isShow"
    @close='closeModal'
    width="60%">
        <div class="row">
            <div class="col-6">
                <ul class="list-group">
                    <li class="list-group-item"
                    @click="addSysCustomerBills(item)"
                    v-for="item in customer" :key="item.id">
                        {{item.nickname}}
                    </li>
                </ul>
            </div>

            <div class="col-6">
                <form>
                    <div class="form-group">
                    <label for="exampleInputEmail1">Bill Name</label>
                    <input type="text" class="form-control" :placeholder="hint" v-model="name" />
                    <small id="emailHelp" class="form-text text-muted" >Please add descriptive text for customer.</small>
                    </div>
                </form>
            </div>
        </div>
        <span slot="footer" class="dialog-footer">
            <button class="btn btn-secondary mr-2" @click="onChangeModal">Close</button>
            <button class="btn btn-success" @click="createCostomer">Create</button>
        </span>
    </el-dialog>

    <el-dialog
    title="Create Customer?"
    :visible.sync="isShowAddUser"
    :close-on-click-modal='false'
    @close='isShowAddUser = false'
    width="40%">
        <div class="pt-2 pb-2 text-center">
            <p>Do you want to add this user to the system as regular customer?</p>
            <div class="row mt-4 mb-3">
                <div class="col-6">
                    <button class="btn btn-success" @click="addCustomer">
                        <i class="fas fa-address-book text-white mr-1"></i>
                        add to customers
                    </button>
                </div>
                <div class="col-6">
                    <button class="btn btn-danger" @click="isShowAddUser = false">
                        <i class="fas fa-times-circle text-white mr-1"></i> skip
                    </button>
                </div>
            </div>
        </div>
    </el-dialog>

</div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';
export default {
    computed: {
        ...mapGetters("bills", {
            'billsList': "getBillsList",
            'systemUser': "getSystemUser",
            'isShow': "getShowBillsModal"
        }),

        ...mapGetters("app", {
            "customer": "getCustomer"
        })
    },

    data: () => ({
        name: '',
        isShowAddUser: false,
        hint: ''
    }),

    watch: {
        name (newVal) {
            if (newVal == '') {
                this.setSystemUser()
            } else {
                this.filterSystemUser(newVal)
            }
        },

        isShow () {
            this.setHint()
        }
    },

    created () {
        this.setCustomer()
        this.setHint()
    },

    methods: {
        onChangeModal () {
            this.setShowBillsModel(false)
        },


        closeModal () {
            this.setShowBillsModel(false)
        },

        setHint () {
            let IXS = 1;
            this.billsList.forEach(item => {
                if (item.name.includes("customer")) {
                    IXS++;
                }
            });
            this.hint = `Customer${IXS}`
        },

        createCostomer () {
            if (this.name == '') {
                let IXS = 1;
                this.billsList.forEach(item => {
                    if (item.name.includes("customer")) {
                        IXS++;
                    }
                });
                this.addBills({
                    name: "customer" + IXS,
                }).then(() =>{
                    this.setShowBillsModel(false)
                })
            } else {
                this.isShowAddUser = true
            }
        },

        addCustomer () {
            this.addSystemUser(this.name).then(() => {
                this.addCustomerBills({
                    name: this.name
                })
            })
        },

        addCustomerBills (params) {
            this.addBills(params).then(() =>{
                this.isShowAddUser = false
                this.setShowBillsModel(false)
            })
        },

        addSysCustomerBills (item) {
            this.addCustomerBills({
                name: item.nickname,
                customer_id: item.id
            })
        },

        ...mapActions("bills", [
            "setShowBillsModel",
            "addBills",
            "addSystemUser"
        ]),

        ...mapActions("app", [
            "setCustomer"
        ])
    }
}
</script>

