export interface getKeysType {
  request_token: any,
  request_time: number
}

export interface requestType {
  url: string,
  data: any
}

export interface listOfWebsitesType {
  data?: [{
    id: number,
    name: string,
    path: string,
    status: string,
    ps: string,
    addTime: string,
    edate: string,
    backup_count: number,
    domain: number,
    ssl: number,
    php_version: string
  }],
}

export interface websiteClassificationType {
    id: number,
    name: string,
    length: number,
}

export interface listPHPType {
  version: string,
  name: string,
  length: number,
}

export interface systemTotalType {
  memTotal: number,
  memFree: number,
  memBuffers: number,
  memCached: number,
  memRealUsed: number,
  cpuNum: number,
  cpuRealUsed: number,
  time: string,
  system: string,
  isuser: number,
  isport: boolean,
  version: string
}

export interface netWork {
  network: {
    eth0: {
      upTotal: number,
      downTotal: number,
      up: number,
      down: number,
      downPackets: number,
      upPackets: number
    },
    lo: {
      upTotal: number,
      downTotal: number,
      up: number,
      down: number,
      downPackets: number,
      upPackets: number
    }
  },
  upTotal: number,
  downTotal: number,
  up: number,
  down: number,
  downPackets: number,
  upPackets: number,
  cpu: [],
  cpu_times: void,
  load: {
    one: number,
    five: number,
    fifteen: number,
    max: number,
    limit: number,
    safe: number
  },
  mem: {
    memTotal: number,
    memFree: number,
    memBuffers: number,
    memCached: number,
    memRealUsed: number
  },
  version: string,
  disk: [
    {
      filesystem: string,
      type: string,
      path: string,
      size: [],
      inodes: []
    }
  ],
  title: string,
  time: string,
  site_total: number,
  ftp_total: number,
  database_total: number,
  system: string,
  installed: boolean,
  user_info: {
    status: boolean,
    msg: string,
    data: { username: string }
  },
  iostat: {
    ALL: {
      read_count: number,
      write_count: number,
      read_bytes: number,
      write_bytes: number,
      read_time: number,
      write_time: number,
      read_merged_count: number,
      write_merged_count: number
    }
  }
}

export interface mailListType {
  data?: [{
    domain: string,
    a_record: string,
    created: string,
    active: number,
    mx_status: number,
    spf_status: number,
    dkim_status: number,
    dmarc_status: number,
    a_status: number,
    dkim_value: string,
    dmarc_value: string,
    mx_record: string,
    ssl_status: boolean,
    catch_all: boolean,
  }],
}

export interface specificMailListType {
  data?: [{
    full_name: string,
    username: string,
    quota: number,
    created: string,
    modified: string,
    active: number,
    is_admin: number
  }]
}

export interface diskInfoType {
  filesystem: string,
  type: string,
  path: string,
  size: [],
  inodes: []
}

export interface updatePanel {
  status: boolean,
  version: string,
  updateMsg: string
}
