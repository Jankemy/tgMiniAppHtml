export class FriendsModel {
    percentFromChildren!: number
    percentFromGrandchildren!: number
    canClaimAt?: number
    invitesLeft!: number
    inviteLink!: string
    claimableBalance!: number
    canClaim!: boolean
    friends!: Friend[]
}

export class Friend {
    username!: string
    balance!: number
}
